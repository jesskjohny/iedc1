const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Colors
css = css.replace(/--bg-dark: #[0-9a-fA-F]+;/gi, '--bg-dark: #09040D;');
css = css.replace(/--bg-darker: #[0-9a-fA-F]+;/gi, '--bg-darker: #05020A;');
css = css.replace(/--bg-card: #[0-9a-fA-F]+;/gi, '--bg-card: #13091F;');
css = css.replace(/--color-primary: #[0-9a-fA-F]+; \/\*.*?\*\//gi, '--color-primary: #ff0055; /* Magenta/Pink */');
css = css.replace(/--color-primary-glow: rgba\([^)]+\);/g, '--color-primary-glow: rgba(255, 0, 85, 0.4);');
css = css.replace(/--color-secondary: #[0-9a-fA-F]+; \/\*.*?\*\//gi, '--color-secondary: #00ffff; /* Cyan/Blue */');

// Hover red buttons to magenta
css = css.replace(/background-color: #CC0000;/g, 'background-color: #ff3377;');
// Wait, Vibrant Red hover might be different, so let's just do a generic replace on hover block
css = css.replace(/\.primary-btn:hover {[\s\S]*?}/, '.primary-btn:hover {\n    background-color: #ff3377;\n    box-shadow: 0 0 30px var(--color-primary-glow);\n    transform: translateY(-2px);\n}');

// Here let's add halftone to body
css = css.replace(/body {[\s\S]*?overflow-x: hidden;\n}/, 'body {\n    background-color: var(--bg-dark);\n    color: var(--text-main);\n    font-family: var(--font-body);\n    line-height: 1.6;\n    overflow-x: hidden;\n    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);\n    background-size: 20px 20px;\n}');

// Hero gradient
css = css.replace(/radial-gradient\(circle at center, #1a0000 0%, transparent 70%\)/gi, 'radial-gradient(circle at center, rgba(255, 0, 85, 0.15) 0%, transparent 70%)');
css = css.replace(/radial-gradient\(circle at center, #[0-9a-fA-F]+ 0%, transparent 70%\)/gi, 'radial-gradient(circle at center, rgba(255, 0, 85, 0.15) 0%, transparent 70%)');

// about image container border
css = css.replace(/border: 1px solid rgba\(255, 42, 42, 0\.3\);/g, 'border: 1px solid rgba(255, 0, 85, 0.5);');

// cyber placeholder gradient
css = css.replace(/rgba\(255,42,42,0\.05\)/g, 'rgba(255, 0, 85, 0.1)');

// event card hover glow
css = css.replace(/border-color: rgba\(255, 42, 42, 0\.5\);/g, 'border-color: rgba(255, 0, 85, 0.5);');

// Hackathon/Pitch background gradients (red to dark magenta/cyan)
css = css.replace(/\.bg-hackathon { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-hackathon { background: linear-gradient(135deg, #2b0821, #1a0515); }');
css = css.replace(/\.bg-pitch { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-pitch { background: linear-gradient(135deg, #1f1f1f, #0a0a0a); }');
css = css.replace(/\.bg-workshop { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-workshop { background: linear-gradient(135deg, #05141a, #02080a); }');

// member image wrapper scanline (was red rgba(255, 42, 42... or whatever))
css = css.replace(/background: linear-gradient\(to bottom, transparent 50%, rgba\([^)]+\) 51%, transparent 51%\);/g, 'background: linear-gradient(to bottom, transparent 50%, rgba(255, 0, 85, 0.2) 51%, transparent 51%);');

// cursor faint glow
css = css.replace(/radial-gradient\(circle, rgba\([^)]+\), transparent 70%\)/g, 'radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent 70%)');

// PulseHeroBg needs to animate the magenta
css = css.replace(/@keyframes pulseHeroBg {[\s\S]*?}/, '@keyframes pulseHeroBg {\n    0% {\n        opacity: 0.6;\n        transform: translate(-50%, -50%) scale(0.9);\n    }\n    100% {\n        opacity: 1;\n        transform: translate(-50%, -50%) scale(1.1);\n    }\n}');

fs.writeFileSync('styles.css', css);
