// script.js

const carousel = document.querySelector('.logo-carousel');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 2; // Ajusta la velocidad del scroll aquí
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
    }
    carousel.scrollLeft = scrollAmount;
}

setInterval(autoScroll, 30); // Ajusta el intervalo de tiempo aquí para un scroll más rápido o más lento
