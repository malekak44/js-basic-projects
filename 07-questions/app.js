const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    let btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        question.classList.toggle("show-text");

        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove("show-text");
            };
        });
    });
});