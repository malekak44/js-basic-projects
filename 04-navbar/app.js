const links = document.querySelector(".links");
const btnToggler = document.querySelector(".nav-toggle");

btnToggler.addEventListener("click", () => {
    links.classList.toggle("show-links");
});