const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. Theme Variables
css = css.replace(/--bg-dark: #09040D;/g, '--bg-dark: #09090b;'); // Charcoal
css = css.replace(/--bg-darker: #05020A;/g, '--bg-darker: #000000;');
css = css.replace(/--bg-card: #13091F;/g, '--bg-card: rgba(24, 24, 27, 0.4);');
css = css.replace(/--color-primary: #ff0055; \/\* Magenta\/Pink \*\//g, '--color-primary: #38bdf8; /* Sky Blue */');
css = css.replace(/--color-primary-glow: rgba\(255, 0, 85, 0\.4\);/g, '--color-primary-glow: rgba(56, 189, 248, 0.5);');
css = css.replace(/--color-secondary: #00ffff; \/\* Cyan\/Blue \*\//g, '--color-secondary: #4f46e5; /* Indigo */');

// 2. Fonts
css = css.replace(/--font-heading: 'Anton', sans-serif;/g, '--font-heading: "Inter", sans-serif;');

// 3. Body Halftone Removal
css = css.replace(/background-image: radial-gradient\(rgba\(255, 255, 255, 0\.05\) 1px, transparent 1px\);\s+background-size: 20px 20px;/g, '');

// 4. Headings styling
css = css.replace(/h1, h2, h3, h4, h5, h6 {[\s\S]*?}/, 'h1, h2, h3, h4, h5, h6 {\n    font-family: var(--font-heading);\n    letter-spacing: -0.02em;\n    font-weight: 700;\n}');

// 5. Navbar
css = css.replace(/\.navbar {[\s\S]*?}/, '.navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 1.5rem 5%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: rgba(9, 9, 11, 0.7);\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n    z-index: 1000;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}');

// 6. Buttons
css = css.replace(/\.btn {[\s\S]*?}/, '.btn {\n    display: inline-block;\n    padding: 0.8rem 2rem;\n    font-family: var(--font-heading);\n    letter-spacing: 0.5px;\n    font-weight: 500;\n    font-size: 1rem;\n    border: none;\n    border-radius: 999px;\n    cursor: pointer;\n    transition: all var(--transition-smooth);\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}');

css = css.replace(/\.primary-btn {[\s\S]*?}/, '.primary-btn {\n    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));\n    color: #fff;\n    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.2);\n}');

css = css.replace(/\.primary-btn:hover {[\s\S]*?}/, '.primary-btn:hover {\n    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.4);\n    transform: translateY(-2px);\n}');

// 7. Hero Before Background Aurora
css = css.replace(/\.hero::before {[\s\S]*?}/, '.hero::before {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100vw;\n    height: 100vh;\n    transform: translate(-50%, -50%);\n    background: radial-gradient(circle at 30% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(56, 189, 248, 0.15) 0%, transparent 50%);\n    z-index: 0;\n    pointer-events: none;\n    animation: pulseHeroBg 10s ease-in-out infinite alternate;\n}');

css = css.replace(/@keyframes pulseHeroBg {[\s\S]*?}/, '@keyframes pulseHeroBg {\n    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.8; }\n    100% { transform: translate(-50%, -50%) scale(1.05) rotate(5deg); opacity: 1; }\n}');

// 8. Title Text
css = css.replace(/\.glitch-title {[\s\S]*?}/, '.glitch-title {\n    font-size: clamp(4rem, 10vw, 7rem);\n    line-height: 1.1;\n    margin: 0;\n    background: linear-gradient(to right, var(--text-main), #94a3b8);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: -0.04em;\n    font-weight: 800;\n}');

css = css.replace(/\.error-glitch::before,[\s\S]*?\.error-glitch::after {[\s\S]*?}/, '.error-glitch::before, .error-glitch::after {\n    display: none;\n}');

// Disable glitch animation entirely from elements
css = css.replace(/\.error-glitch {[\s\S]*?}/, '.error-glitch {\n    position: relative;\n}');

// 9. Event Card
css = css.replace(/\.event-card {[\s\S]*?}/, '.event-card {\n    background: var(--bg-card);\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    border: 1px solid rgba(255, 255, 255, 0.05);\n    border-radius: 16px;\n    overflow: hidden;\n    transition: transform var(--transition-smooth), border-color var(--transition-smooth), box-shadow var(--transition-smooth);\n    display: flex;\n    flex-direction: column;\n}');

css = css.replace(/\.event-card:hover {[\s\S]*?}/, '.event-card:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);\n    border-color: rgba(255, 255, 255, 0.15);\n}');

// Event Card Images (remove harsh colors)
css = css.replace(/\.bg-hackathon { background: linear-gradient\(135deg, #1e1b4b, #0f172a\); }/g, '.bg-hackathon { background: linear-gradient(135deg, #1e1b4b, #0f172a); }');
css = css.replace(/\.bg-pitch { background: linear-gradient\(135deg, #0f172a, #020617\); }/g, '.bg-pitch { background: linear-gradient(135deg, #0f172a, #020617); }');
css = css.replace(/\.bg-workshop { background: linear-gradient\(135deg, #082f49, #020617\); }/g, '.bg-workshop { background: linear-gradient(135deg, #082f49, #020617); }');

// 10. Team Member Cards
css = css.replace(/\.member-image {[\s\S]*?}/, '.member-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 20px;\n    filter: grayscale(80%) sepia(10%) hue-rotate(200deg);\n    transition: filter var(--transition-smooth), transform var(--transition-smooth);\n}');

css = css.replace(/\.team-card:hover .member-image {[\s\S]*?}/, '.team-card:hover .member-image {\n    filter: grayscale(0%);\n    transform: scale(1.02);\n}');

css = css.replace(/\.member-image-wrapper::after {[\s\S]*?}/g, '.member-image-wrapper::after {\n    display: none;\n}'); // remove scanlines entirely

// Team member info
css = css.replace(/\.member-name {[\s\S]*?}/, '.member-name {\n    font-size: clamp(3rem, 6vw, 5rem);\n    font-family: var(--font-heading);\n    margin-bottom: 0.5rem;\n    line-height: 1.1;\n    letter-spacing: -0.02em;\n    font-weight: 700;\n    color: var(--text-main);\n}');

css = css.replace(/\.member-role {[\s\S]*?}/, '.member-role {\n    font-family: var(--font-body);\n    font-size: 1rem;\n    margin-bottom: 1rem;\n    color: var(--color-primary);\n    display: block;\n    letter-spacing: 2px;\n    font-weight: 500;\n    text-transform: uppercase;\n}');

// 11. Footer
css = css.replace(/\.footer {[\s\S]*?}/, '.footer {\n    background-color: #020617;\n    border-top: 1px solid rgba(255, 255, 255, 0.05);\n    padding: 4rem 0 0 0;\n}');

// Write back
fs.writeFileSync('styles.css', css);
