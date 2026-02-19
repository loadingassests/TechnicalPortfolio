const nav = document.querySelector("nav");
const main = document.querySelector("main");
function menuToggle() {
    nav.classList.toggle("hidden");
    main.classList.toggle("blurred");
}