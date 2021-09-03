const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    e.target.classList.add("active");

    contents.forEach(content => {
        content.classList.remove("active");
    });

    const content = document.getElementById(id);
    content.classList.add("active");
});