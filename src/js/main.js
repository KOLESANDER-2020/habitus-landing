import '../scss/style.scss';
import './module/look_inside_splide.js';



import init from './script.js';
init()

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".js-burger-menu");
    const menu = document.querySelector(".js-header-menu-list");
    const body = document.body;

    if (!burger || !menu) return;

    burger.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        burger.classList.toggle("active");
        body.style.overflow = isOpen ? "hidden" : "";
    });
});



