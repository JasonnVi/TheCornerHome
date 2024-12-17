document.addEventListener('DOMContentLoaded', function() {
    // Existing smooth scrolling to all links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Existing Gallery Image Lightbox
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.zIndex = '1000';

            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.style.maxWidth = '90%';
            lightboxImg.style.maxHeight = '90%';

            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });

    // New: Carousel Auto-play and Pause on Hover
    const homeCarousel = document.getElementById('homeCarousel');
    if (homeCarousel) {
        const carousel = new bootstrap.Carousel(homeCarousel, {
            interval: 5000, // Change slide every 5 seconds
            ride: 'carousel'
        });

        // Pause carousel on hover
        homeCarousel.addEventListener('mouseenter', () => {
            carousel.pause();
        });

        // Resume carousel when mouse leaves
        homeCarousel.addEventListener('mouseleave', () => {
            carousel.cycle();
        });
    }
});