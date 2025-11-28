// Simple entrance animation trigger
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    // Make sidebar menu items interactive (set active on click)
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
        // allow keyboard activation
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
        // make elements focusable for accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
    });

    // tiny UX: animate Get Started click when present (anchors handle navigation)
    const start = document.querySelector('.btn-start');
    if (start) {
        start.addEventListener('click', () => {
            start.classList.add('subtle-press');
            setTimeout(() => start.classList.remove('subtle-press'), 160);
        });
    }
});

// Hover sound or interactive UI (optional enhancement)
console.log("Landing Page Loaded Successfully!");