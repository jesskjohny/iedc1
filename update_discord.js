const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\jessk\\.gemini\\antigravity\\scratch\\iedc-website-lusion';
const oldLink = 'https://discord.gg/hWqNcGG5';
const newLink = 'https://discord.gg/Aqc9rXQwdN';

const files = fs.readdirSync(directory);

files.forEach(file => {
    if (file.endsWith('.html')) {
        const filePath = path.join(directory, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes(oldLink)) {
            content = content.replace(new RegExp(oldLink, 'g'), newLink);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated Discord link in ${file}`);
        }
    }
});
