const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. Theme Variables
css = css.replace(/--bg-dark: #[0-9a-fA-F]+;/g, '--bg-dark: #1A1818;'); // Warm charcoal
css = css.replace(/--bg-darker: #[0-9a-fA-F]+;/g, '--bg-darker: #151414;');
css = css.replace(/--bg-card: [^;]+;/g, '--bg-card: #262423;'); // Solid soft card block
css = css.replace(/--color-primary: #[0-9a-fA-F]+; \/\*.*?\*\//g, '--color-primary: #FBBF24; /* Amber/Gold */');
css = css.replace(/--color-primary-glow: [^;]+;/g, '--color-primary-glow: rgba(251, 191, 36, 0.4);');
css = css.replace(/--color-secondary: #[0-9a-fA-F]+; \/\*.*?\*\//g, '--color-secondary: #FB7185; /* Soft Rose */');
css = css.replace(/--text-main: #[0-9a-fA-F]+;/g, '--text-main: #FFFBEB;'); // Warm off-white
css = css.replace(/--text-muted: #[0-9a-fA-F]+;/g, '--text-muted: #D4D4D8;');

// 2. Buttons
css = css.replace(/\.primary-btn {[\s\S]*?}/, '.primary-btn {\n    background-color: var(--color-primary);\n    color: #1A1818;\n    font-weight: 700;\n    box-shadow: 0 4px 15px var(--color-primary-glow);\n}');

css = css.replace(/\.primary-btn:hover {[\s\S]*?}/, '.primary-btn:hover {\n    box-shadow: 0 10px 25px rgba(251, 191, 36, 0.6);\n    transform: translateY(-3px);\n    background-color: #FCD34D;\n}');

// 3. Navbar
css = css.replace(/\.navbar {[\s\S]*?}/, '.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 1.5rem 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: rgba(26, 24, 24, 0.95);\n    z-index: 1000;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.03);\n}');

// 4. Hero Title styling (remove pure text clip)
css = css.replace(/\.glitch-title {[\s\S]*?}/, '.glitch-title {\n    font-size: clamp(4rem, 10vw, 7rem);\n    line-height: 1.1;\n    margin: 0;\n    color: var(--text-main);\n    letter-spacing: -0.04em;\n    font-weight: 800;\n}');

// 5. Hero Before Background Aurora -> gentle sunset glow
css = css.replace(/radial-gradient\(circle at 30% 50%, rgba\(79, 70, 229, 0\.15\) 0%, transparent 50%\), radial-gradient\(circle at 70% 60%, rgba\(56, 189, 248, 0\.15\) 0%, transparent 50%\)/g, 'radial-gradient(circle at 30% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(251, 113, 133, 0.1) 0%, transparent 50%)');

// 6. Event Card
css = css.replace(/\.event-card {[\s\S]*?}/, '.event-card {\n    background: var(--bg-card);\n    border: 1px solid rgba(255, 255, 255, 0.03);\n    border-radius: 32px;\n    overflow: hidden;\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}');

css = css.replace(/\.event-card:hover {[\s\S]*?}/, '.event-card:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);\n}');

// Event Card Images Gradients
css = css.replace(/\.bg-hackathon { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-hackathon { background: linear-gradient(135deg, #78350f, #451a03); }');
css = css.replace(/\.bg-pitch { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-pitch { background: linear-gradient(135deg, #4c1d95, #2e1065); }');
css = css.replace(/\.bg-workshop { background: linear-gradient\(135deg, #[0-9a-fA-F]+, #[0-9a-fA-F]+\); }/g, '.bg-workshop { background: linear-gradient(135deg, #064e3b, #022c22); }');

// 7. Team Member Cards
css = css.replace(/\.member-image {[\s\S]*?}/, '.member-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n    filter: grayscale(20%) sepia(20%);\n    transition: filter var(--transition-smooth), transform var(--transition-smooth), border-radius 0.8s ease;\n}');

css = css.replace(/\.team-card:hover .member-image {[\s\S]*?}/, '.team-card:hover .member-image {\n    filter: grayscale(0%);\n    transform: scale(1.02);\n    border-radius: 50% 50% 30% 70% / 70% 30% 70% 30%;\n}');

// 8. Footer
css = css.replace(/\.footer {[\s\S]*?}/, '.footer {\n    background-color: #151414;\n    border-top: none;\n    padding: 6rem 0 0 0;\n    box-shadow: 0 -10px 40px rgba(0,0,0,0.2);\n}');

// 9. About Image Container (Replace cyber styling)
css = css.replace(/\.about-image-container {[\s\S]*?}/, '.about-image-container {\n    position: relative;\n    height: 500px;\n    border-radius: 40px;\n    background: var(--bg-card);\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n}');

css = css.replace(/\.cyber-placeholder {[\s\S]*?}/, '.cyber-placeholder {\n    width: 80%;\n    height: 80%;\n    border-radius: 30px;\n    border: 2px dashed rgba(251, 191, 36, 0.2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}');

// 10. Sponsor Orbs (Sunset colors)
css = css.replace(/rgba\(0, 255, 255, 0\.2\)/g, 'rgba(251, 113, 133, 0.2)'); // Cyan to rose

// Write back
fs.writeFileSync('styles.css', css);
