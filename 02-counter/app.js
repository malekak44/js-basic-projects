const buttons = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let counter = 0;

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let btnClass = e.target.className;
        if (btnClass.includes("decrease")) {
            counter--;
            value.textContent = counter;
        } else if (btnClass.includes("increase")) {
            counter++;
            value.textContent = counter;
        } else {
            counter = 0;
            value.textContent = counter;
        }

        if (counter === 0) {
            value.style.color = "rgb(34, 34, 34)";
        } else if (counter < 0) {
            value.style.color = "red";
        } else if (counter > 0) {
            value.style.color = "green";
        }
    });
});