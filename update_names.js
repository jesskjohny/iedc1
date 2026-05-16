const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\jessk\\.gemini\\antigravity\\scratch\\iedc-website-lusion';
const files = fs.readdirSync(directory);

files.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.css')) {
        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace logo and titles
        content = content.replace(/IEDC VJCET\./g, 'IEDC VJCET WEBSITE.');
        content = content.replace(/IEDC VJCET(?! WEBSITE)/g, 'IEDC VJCET WEBSITE');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
