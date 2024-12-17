document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.text-section');
    const images = document.querySelectorAll('.bg-image');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imageIndex = entry.target.dataset.image;
                updateActiveImage(imageIndex);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    function updateActiveImage(index) {
        images.forEach(img => {
            img.classList.remove('active');
            if (img.dataset.index === index) {
                img.classList.add('active');
            }
        });
    }
});