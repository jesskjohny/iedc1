const fs = require('fs');
const path = require('path');

const directory = 'c:\\Users\\jessk\\.gemini\\antigravity\\scratch\\iedc-website-lusion';
const files = ['idea-fest.html', 'gen-ai.html', 'decode-recode.html', 'thread-zero.html'];

const swipeCode = `
            // Swipe Navigation
            let touchStartX = 0;
            let touchEndX = 0;
            
            lightbox.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            lightbox.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    // Swipe Left -> Next
                    currentImageIndex = (currentImageIndex < galleryImages.length - 1) ? currentImageIndex + 1 : 0;
                    updateLightboxImage();
                } else if (touchEndX > touchStartX + swipeThreshold) {
                    // Swipe Right -> Prev
                    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : galleryImages.length - 1;
                    updateLightboxImage();
                }
            }
`;

files.forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('// Keyboard Navigation') && !content.includes('// Swipe Navigation')) {
            content = content.replace('// Keyboard Navigation', swipeCode + '\n            // Keyboard Navigation');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Added swipe support to ${file}`);
        }
    }
});
