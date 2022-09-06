choiceA = document.getElementById("developmentA");

choiceA.addEventListener("click", onClick);

incorrect = document.getElementById("incorrectAnswer");

function onClick() {
    incorrect.classList.remove("dontshow");
}
