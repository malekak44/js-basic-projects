const sidebar = document.querySelector(".sidebar");
const btnToggler = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

btnToggler.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});