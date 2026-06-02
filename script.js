document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const totalPhotos = 50; // Bhai yahan jitni photos hain wo number daal do

    // 1. Yeh loop automatic 50 photos generate karega
    for (let i = 1; i <= totalPhotos; i++) {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        
        // Isme aapki photo ka path set ho rha hai (pic1.jpg, pic2.jpg...)
        item.innerHTML = `<img src="images/pic${i}.jpg" alt="Khushbu Memory ${i}">`;
        
        gallery.appendChild(item);
    }

    // 2. Pop-up (Lightbox) ka code
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            lightbox.style.display = 'flex';
            lightboxImg.src = e.target.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
