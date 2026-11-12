import './styles.less';
import '../Javascript/portafolio.js';

const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}