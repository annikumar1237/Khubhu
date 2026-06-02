document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    // Click par photo badi karein
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
        });
    });

    // Close button par click karke band karein
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Bahar click karne par bhi band ho jaye
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
