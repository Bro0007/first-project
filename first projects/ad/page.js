document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.sale-photos img');
    const leftButton = document.querySelector('.arrow.left');
    const rightButton = document.querySelector('.arrow.right');
    let currentIndex = 0;

    const updateActiveImage = () => {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    };

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateActiveImage();
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateActiveImage();
    });
    
    updateActiveImage();
});