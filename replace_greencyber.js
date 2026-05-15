const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. Core Variables
css = css.replace(/--bg-dark: #[0-9a-fA-F]+;/gi, '--bg-dark: #000000;');
css = css.replace(/--bg-darker: #[0-9a-fA-F]+;/gi, '--bg-darker: #050505;');
css = css.replace(/--bg-card: #[0-9a-fA-F]+;/gi, '--bg-card: #111111;');
css = css.replace(/--color-primary: #[0-9a-fA-F]+; \/\*.*?\*\//gi, '--color-primary: #008000; /* Dark Green */');
css = css.replace(/--color-primary-glow: rgba\([^)]+\);/g, '--color-primary-glow: rgba(0, 128, 0, 0.4);');
css = css.replace(/--color-secondary: #[0-9a-fA-F]+; \/\*.*?\*\//gi, '--color-secondary: #00FF00; /* Neon Green */');

// 2. Button Hovers
css = css.replace(/background-color: #ff3377;/g, 'background-color: #00aa00;');

// 3. Hero & Other Gradients
css = css.replace(/rgba\(255, 0, 85, 0\.15\)/g, 'rgba(0, 128, 0, 0.15)');
css = css.replace(/rgba\(255, 0, 85, 0\.5\)/g, 'rgba(0, 128, 0, 0.5)');
css = css.replace(/rgba\(255, 0, 85, 0\.2\)/g, 'rgba(0, 128, 0, 0.2)');
css = css.replace(/rgba\(255, 0, 85, 0\.1\)/g, 'rgba(0, 128, 0, 0.1)');

// 4. Cursor Faint Glow
css = css.replace(/rgba\(0, 255, 255, 0\.2\)/g, 'rgba(0, 128, 0, 0.2)');

// 5. Card Background Gradients
css = css.replace(/\.bg-hackathon { background: linear-gradient\(135deg, #2b0821, #1a0515\); }/g, '.bg-hackathon { background: linear-gradient(135deg, #082b08, #051a05); }');
// The pitch and workshop gradients were changed to magenta/cyan vibes earlier. To be safe, we just replace all of them:
css = css.replace(/\.bg-pitch { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-pitch { background: linear-gradient(135deg, #051f05, #000c00); }');
css = css.replace(/\.bg-workshop { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-workshop { background: linear-gradient(135deg, #021a0a, #000803); }');

// 6. Glitches
css = css.replace(/text-shadow: -2px 0 #00ffff;/g, 'text-shadow: -2px 0 rgba(0, 255, 0, 0.8);');
css = css.replace(/text-shadow: -2px 0 #ff00ff;/g, 'text-shadow: -2px 0 rgba(0, 128, 0, 0.8);');

fs.writeFileSync('styles.css', css);
