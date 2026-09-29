/* Cursor-Guided Navigation & Natural Image Color Lens Delegation */
document.addEventListener('DOMContentLoaded', () => {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinksContainer = document.querySelector('.menu-links');

    if (menuOverlay && menuLinksContainer) {
        let targetY = 0;
        let currentY = 0;
        let animFrame = null;

        const updateShift = (clientY) => {
            if (!menuOverlay.classList.contains('active')) return;
            const windowHeight = window.innerHeight;
            const ratioY = clientY / windowHeight;
            const containerHeight = menuLinksContainer.offsetHeight;
            const availableSpace = windowHeight - 100;

            if (containerHeight > availableSpace) {
                const maxShift = (containerHeight - availableSpace) / 2 + 80;
                targetY = (0.5 - ratioY) * 2 * maxShift;
            } else {
                targetY = (0.5 - ratioY) * 140;
            }
        };

        const animate = () => {
            if (menuOverlay.classList.contains('active')) {
                currentY += (targetY - currentY) * 0.12;
                menuLinksContainer.style.transform = `translateY(${currentY}px)`;
                animFrame = requestAnimationFrame(animate);
            } else {
                currentY = 0;
                targetY = 0;
                menuLinksContainer.style.transform = '';
                if (animFrame) cancelAnimationFrame(animFrame);
            }
        };

        const onPointerMove = (e) => {
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            updateShift(clientY);
        };

        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('touchmove', onPointerMove, { passive: true });

        const observer = new MutationObserver(() => {
            if (menuOverlay.classList.contains('active')) {
                document.body.classList.add('menu-open');
                updateShift(window.innerHeight / 2);
                animate();
            } else {
                document.body.classList.remove('menu-open');
                currentY = 0;
                targetY = 0;
                menuLinksContainer.style.transform = '';
            }
        });

        observer.observe(menuOverlay, { attributes: true, attributeFilter: ['class'] });

        const menuToggle = document.getElementById('menuToggle');
        const menuClose = document.getElementById('menuClose');
        const menuLinks = document.querySelectorAll('.menu-link');

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                document.body.classList.add('menu-open');
            });
        }

        if (menuClose) {
            menuClose.addEventListener('click', () => {
                document.body.classList.remove('menu-open');
            });
        }

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('menu-open');
            });
        });
    }

    // Global Image Hover Lens (Overrides mix-blend-mode: difference to show true natural colors)
    document.addEventListener('mouseover', (e) => {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;
        const target = e.target;
        const isImage = target.tagName === 'IMG' || 
                        target.closest('.team-img-wrapper') || 
                        target.closest('.gallery-item') || 
                        target.closest('.member-popup-img') ||
                        target.classList.contains('team-img');
        
        if (isImage) {
            cursor.classList.add('img-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;
        const target = e.target;
        const isImage = target.tagName === 'IMG' || 
                        target.closest('.team-img-wrapper') || 
                        target.closest('.gallery-item') || 
                        target.closest('.member-popup-img') ||
                        target.classList.contains('team-img');
        
        if (isImage) {
            cursor.classList.remove('img-hover');
        }
    });
});
