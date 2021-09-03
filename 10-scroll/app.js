const date = document.getElementById("date");
date.textContent = new Date().getFullYear();

const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const containerHeight = linksContainer.getBoundingClientRect().height;

navToggle.addEventListener("click", () => {
    const linksHeight = links.getBoundingClientRect().height;

    if (linksContainer.style.height === `${linksHeight}px`) {
        linksContainer.style.height = 0;
    } else {
        linksContainer.style.height = `${linksHeight}px`;
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > navbarHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const section = document.getElementById(id);
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = section.offsetTop - navbarHeight;

        if (!fixedNav) {
            position = position - navbarHeight;
        }

        if (navbarHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });

        linksContainer.style.height = 0;
    });
});