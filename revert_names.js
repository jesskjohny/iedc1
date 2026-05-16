const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\jessk\\.gemini\\antigravity\\scratch\\iedc-website-lusion';
const files = fs.readdirSync(directory);

files.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.css')) {
        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace "IEDC VJCET WEBSITE" with "IEDC VJCET"
        content = content.replace(/IEDC VJCET WEBSITE/g, 'IEDC VJCET');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Reverted ${file}`);
    }
});
