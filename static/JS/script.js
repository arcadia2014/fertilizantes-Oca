

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-images");
    const images = carousel.querySelectorAll("img");
    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= images.length) {
            index = 0; // Reinicia el índice si llega al final
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // Configura el intervalo para el desplazamiento automático
    setInterval(moveCarousel, 3000); // Cambia cada 3 segundos
});