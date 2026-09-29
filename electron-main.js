const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn, exec } = require('child_process');
const http = require('http');

let mainWindow = null;
let httpServer = null;
let cloudflaredProcess = null;

let hostingState = {
    status: 'offline', // 'offline', 'starting', 'online'
    url: null,
    port: 8080,
    logs: []
};

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1440,
        height: 900,
        minWidth: 1024,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false // Allow loading local files/iframes cleanly in studio
        },
        autoHideMenuBar: true,
        title: "IEDC VJCET | Content & Hosting Studio",
        icon: path.join(__dirname, 'assets/app_logo.png')
    });

    mainWindow.loadFile('admin.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
        stopHosting();
    });
}

// ---------------------------------------------------------
// LOCAL HTTP SERVER & CLOUDFLARE TUNNEL (HOST / UNHOST)
// ---------------------------------------------------------
function startLocalHttpServer(port = 8080) {
    return new Promise((resolve, reject) => {
        if (httpServer) {
            return resolve(hostingState.port);
        }

        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.webp': 'image/webp',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf'
        };

        httpServer = http.createServer((req, res) => {
            let reqUrl = req.url.split('?')[0];
            if (reqUrl === '/') reqUrl = '/index.html';
            const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
            const filePath = path.join(__dirname, safePath);

            if (!filePath.startsWith(__dirname)) {
                res.writeHead(403);
                res.end('Access Denied');
                return;
            }

            fs.stat(filePath, (err, stats) => {
                if (err || !stats.isFile()) {
                    const notFoundPath = path.join(__dirname, '404.html');
                    if (fs.existsSync(notFoundPath)) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(fs.readFileSync(notFoundPath));
                    } else {
                        res.writeHead(404);
                        res.end('File Not Found');
                    }
                    return;
                }

                const ext = path.extname(filePath).toLowerCase();
                const contentType = mimeTypes[ext] || 'application/octet-stream';

                res.writeHead(200, {
                    'Content-Type': contentType,
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                    'Access-Control-Allow-Origin': '*'
                });
                fs.createReadStream(filePath).pipe(res);
            });
        });

        httpServer.listen(port, () => {
            hostingState.port = port;
            console.log(`Local HTTP server running at http://localhost:${port}`);
            resolve(port);
        });

        httpServer.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                startLocalHttpServer(port + 1).then(resolve).catch(reject);
            } else {
                reject(err);
            }
        });
    });
}

function startCloudflareTunnel(port) {
    return new Promise((resolve, reject) => {
        const cloudflaredPath = path.join(__dirname, 'cloudflared.exe');
        if (!fs.existsSync(cloudflaredPath)) {
            return reject(new Error('cloudflared.exe not found in workspace'));
        }

        hostingState.status = 'starting';
        hostingState.url = null;
        if (mainWindow) mainWindow.webContents.send('admin:hosting-status-changed', hostingState);

        cloudflaredProcess = spawn(cloudflaredPath, ['tunnel', '--url', `http://localhost:${port}`]);

        let resolved = false;

        const handleLog = (data) => {
            const str = data.toString();
            hostingState.logs.push(str);
            if (hostingState.logs.length > 100) hostingState.logs.shift();

            if (mainWindow) mainWindow.webContents.send('admin:hosting-log', str);

            const match = str.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
            if (match && !resolved) {
                resolved = true;
                hostingState.status = 'online';
                hostingState.url = match[0];
                if (mainWindow) mainWindow.webContents.send('admin:hosting-status-changed', hostingState);
                resolve(hostingState.url);
            }
        };

        cloudflaredProcess.stdout.on('data', handleLog);
        cloudflaredProcess.stderr.on('data', handleLog);

        cloudflaredProcess.on('error', (err) => {
            hostingState.status = 'offline';
            hostingState.url = null;
            if (mainWindow) mainWindow.webContents.send('admin:hosting-status-changed', hostingState);
            if (!resolved) reject(err);
        });

        cloudflaredProcess.on('close', () => {
            hostingState.status = 'offline';
            hostingState.url = null;
            cloudflaredProcess = null;
            if (mainWindow) mainWindow.webContents.send('admin:hosting-status-changed', hostingState);
        });
    });
}

function stopHosting() {
    if (cloudflaredProcess) {
        try {
            if (process.platform === 'win32') {
                exec(`taskkill /pid ${cloudflaredProcess.pid} /T /F`);
            } else {
                cloudflaredProcess.kill('SIGKILL');
            }
        } catch (e) {
            console.error('Failed to kill cloudflared:', e);
        }
        cloudflaredProcess = null;
    }

    if (httpServer) {
        try {
            httpServer.close();
        } catch (e) {}
        httpServer = null;
    }

    hostingState.status = 'offline';
    hostingState.url = null;
    if (mainWindow) mainWindow.webContents.send('admin:hosting-status-changed', hostingState);
    return { success: true };
}

// IPC Handlers for Hosting
ipcMain.handle('admin:start-hosting', async () => {
    try {
        const port = await startLocalHttpServer(8080);
        const publicUrl = await startCloudflareTunnel(port);
        return { success: true, url: publicUrl, port };
    } catch (err) {
        stopHosting();
        return { success: false, error: err.message };
    }
});

ipcMain.handle('admin:stop-hosting', async () => {
    return stopHosting();
});

ipcMain.handle('admin:get-hosting-status', async () => {
    return hostingState;
});

// IPC Handlers for Admin File system & Content Management
ipcMain.handle('admin:list-files', async () => {
    try {
        const fileList = [];
        function scanDir(dir) {
            const files = fs.readdirSync(dir);
            files.forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                const relativePath = path.relative(__dirname, filePath).replace(/\\/g, '/');

                if (stat.isDirectory()) {
                    if (file !== 'node_modules' && file !== '.git' && file !== '.backups' && file !== '.system_generated' && file !== 'assets') {
                        scanDir(filePath);
                    }
                } else {
                    const ext = path.extname(file).toLowerCase();
                    if (['.html', '.css', '.js', '.json'].includes(ext)) {
                        if (file !== 'package-lock.json' && file !== 'preload.js' && file !== 'electron-main.js') {
                            fileList.push(relativePath);
                        }
                    }
                }
            });
        }
        scanDir(__dirname);
        return fileList;
    } catch (err) {
        console.error("Failed to list files", err);
        throw err;
    }
});

ipcMain.handle('admin:read-file', async (event, relativePath) => {
    try {
        const absolutePath = path.resolve(__dirname, relativePath);
        if (!absolutePath.startsWith(__dirname)) {
            throw new Error('Access denied: Out of workspace bounds');
        }
        return fs.readFileSync(absolutePath, 'utf8');
    } catch (err) {
        console.error(`Failed to read file: ${relativePath}`, err);
        throw err;
    }
});

ipcMain.handle('admin:save-file', async (event, { relativePath, content }) => {
    try {
        const absolutePath = path.resolve(__dirname, relativePath);
        if (!absolutePath.startsWith(__dirname)) {
            throw new Error('Access denied: Out of workspace bounds');
        }

        const backupsDir = path.join(__dirname, '.backups');
        if (!fs.existsSync(backupsDir)) {
            fs.mkdirSync(backupsDir, { recursive: true });
        }

        if (fs.existsSync(absolutePath)) {
            const filename = path.basename(relativePath);
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupPath = path.join(backupsDir, `${filename}.${timestamp}.bak`);
            fs.copyFileSync(absolutePath, backupPath);
        }

        fs.writeFileSync(absolutePath, content, 'utf8');
        return { success: true };
    } catch (err) {
        console.error(`Failed to save file: ${relativePath}`, err);
        throw err;
    }
});

// IPC Handler for Uploading Assets directly to assets/ directory
ipcMain.handle('admin:upload-asset', async (event, { fileName, base64Data }) => {
    try {
        const assetsDir = path.join(__dirname, 'assets');
        if (!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir, { recursive: true });
        }

        const sanitizedName = path.basename(fileName).replace(/[^a-zA-Z0-9_.-]/g, '_');
        const targetPath = path.join(assetsDir, sanitizedName);
        const buffer = Buffer.from(base64Data.split(',')[1] || base64Data, 'base64');
        fs.writeFileSync(targetPath, buffer);

        return { success: true, relativePath: `assets/${sanitizedName}` };
    } catch (err) {
        console.error('Failed to upload asset', err);
        return { success: false, error: err.message };
    }
});

// IPC Handler for Updating Theme Variables in styles.css
ipcMain.handle('admin:save-theme', async (event, cssVars) => {
    try {
        const stylePath = path.join(__dirname, 'styles.css');
        let cssContent = fs.readFileSync(stylePath, 'utf8');

        Object.entries(cssVars).forEach(([varName, varValue]) => {
            const regex = new RegExp(`(${varName}\\s*:\\s*)([^;]+)(;)`, 'g');
            if (regex.test(cssContent)) {
                cssContent = cssContent.replace(regex, `$1${varValue}$3`);
            } else {
                // If variable doesn't exist, insert into :root
                cssContent = cssContent.replace(/:root\s*\{/, `:root {\n    ${varName}: ${varValue};`);
            }
        });

        const backupsDir = path.join(__dirname, '.backups');
        if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir, { recursive: true });
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        fs.copyFileSync(stylePath, path.join(backupsDir, `styles.css.${timestamp}.bak`));

        fs.writeFileSync(stylePath, cssContent, 'utf8');
        return { success: true };
    } catch (err) {
        console.error('Failed to save theme', err);
        return { success: false, error: err.message };
    }
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    stopHosting();
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

