const { contextBridge, ipcRenderer } = require('electron');

// Expose safe Electron APIs to the Studio web app
contextBridge.exposeInMainWorld('electronAPI', {
    isElectron: true,
    readFile: (filePath) => ipcRenderer.invoke('admin:read-file', filePath),
    saveFile: (filePath, content) => ipcRenderer.invoke('admin:save-file', { relativePath: filePath, content }),
    listFiles: () => ipcRenderer.invoke('admin:list-files'),
    uploadAsset: (fileName, base64Data) => ipcRenderer.invoke('admin:upload-asset', { fileName, base64Data }),
    saveTheme: (cssVars) => ipcRenderer.invoke('admin:save-theme', cssVars),

    // Hosting Control APIs
    startHosting: () => ipcRenderer.invoke('admin:start-hosting'),
    stopHosting: () => ipcRenderer.invoke('admin:stop-hosting'),
    getHostingStatus: () => ipcRenderer.invoke('admin:get-hosting-status'),

    // Hosting Event Listeners
    onHostingStatusChanged: (callback) => {
        ipcRenderer.on('admin:hosting-status-changed', (event, status) => callback(status));
    },
    onHostingLog: (callback) => {
        ipcRenderer.on('admin:hosting-log', (event, log) => callback(log));
    }
});

