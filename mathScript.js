/*make question and answer choices appear*/
expandQuestion = document.getElementById("expand");
expandQuestion.addEventListener("click", expandClick);

expand1 = document.getElementById("1");
expand2 = document.getElementById("2");
expand3 = document.getElementById("3");

function expandClick() {
    expand1.classList.toggle("dontshow");
    expand1.classList.toggle("questionImage");
    expand2.classList.toggle("dontshow");
    expand2.classList.toggle("questionCredit");
    expand3.classList.toggle("dontshow");
    expand3.classList.toggle("answer")
} 

/*make answer responses appear*/
incorrect = document.getElementById("incorrectAnswer");
correct = document.getElementById("correctAnswer")

function onClickIncorrect() {
    incorrect.classList.remove("dontshow");
    incorrect.classList.add("answer");
    incorrect.style.backgroundColor = "#3b3c6e";
}

function onClickCorrect() {
    correct.classList.remove("dontshow");
    correct.classList.add("answer");
    correct.style.backgroundColor = "#3b3c6e"
}

choiceA = document.getElementById("algebraA");
choiceA.addEventListener("click", onClickIncorrect);

choiceB = document.getElementById("algebraB");
choiceB.addEventListener("click", onClickCorrect);

choiceC = document.getElementById("algebraC");
choiceC.addEventListener("click", onClickIncorrect);

choiceD = document.getElementById("algebraD");
choiceD.addEventListener("click", onClickIncorrect);

incorrect.addEventListener("click", onClickOff)
correct.addEventListener("click", onClickOff)

function onClickOff () {
    incorrect.classList.remove("answer");
    incorrect.classList.add("dontshow");
    
    correct.classList.remove("answer");
    correct.classList.add("dontshow");
}
