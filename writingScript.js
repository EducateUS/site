/* First Bullet */
thetitle = document.getElementById("hidden");

thetitle.addEventListener("click", onClick);

thetext = document.getElementById("hiddentext");

function onClick() {
    thetext.classList.remove("dontshow");
    thetitle.innerHTML = '<strong>Development</strong> <em>[collapse]</em>';
    
    thetitle.removeEventListener("click", onClick)
    thetitle.addEventListener("click", collapseClick);
}

function collapseClick() {
    thetitle.innerHTML = 'Development';
    thetext.classList.add("dontshow");

    thetitle.removeEventListener("click", collapseClick);
    thetitle.addEventListener("click", onClick)
}

/* Second Bullet */
thetitle2 = document.getElementById("hidden2");

thetitle2.addEventListener("click", onClick2);

thetext2 = document.getElementById("hiddentext2");

function onClick2() {
    thetext2.classList.remove("dontshow");
    thetitle2.innerHTML = '<strong>Organization</strong> <em>[collapse]</em>';
    
    thetitle2.removeEventListener("click", onClick2)
    thetitle2.addEventListener("click", collapseClick2);
}

function collapseClick2() {
    thetitle2.innerHTML = 'Organization';
    thetext2.classList.add("dontshow");

    thetitle2.removeEventListener("click", collapseClick2);
    thetitle2.addEventListener("click", onClick2)
}

/* Third Bullet */
thetitle3 = document.getElementById("hidden3");

thetitle3.addEventListener("click", onClick3);

thetext3 = document.getElementById("hiddentext3");

function onClick3() {
    thetext3.classList.remove("dontshow");
    thetitle3.innerHTML = '<strong>Effective Language Use</strong> <em>[collapse]</em>';
    
    thetitle3.removeEventListener("click", onClick3)
    thetitle3.addEventListener("click", collapseClick3);
}

function collapseClick3() {
    thetitle3.innerHTML = 'Effective Language Use';
    thetext3.classList.add("dontshow");

    thetitle3.removeEventListener("click", collapseClick3);
    thetitle3.addEventListener("click", onClick3)
}

/* Fourth Bullet */
thetitle4 = document.getElementById("hidden4");

thetitle4.addEventListener("click", onClick4);

thetext4 = document.getElementById("hiddentext4");

function onClick4() {
    thetext4.classList.remove("dontshow");
    thetitle4.innerHTML = '<strong>Sentence Structure</strong> <em>[collapse]</em>';
    
    thetitle4.removeEventListener("click", onClick4)
    thetitle4.addEventListener("click", collapseClick4);
}

function collapseClick4() {
    thetitle4.innerHTML = 'Sentence Structure';
    thetext4.classList.add("dontshow");

    thetitle4.removeEventListener("click", collapseClick4);
    thetitle4.addEventListener("click", onClick4);
}

/* Fifth Bullet */
thetitle5 = document.getElementById("hidden5");

thetitle5.addEventListener("click", onClick5);

thetext5 = document.getElementById("hiddentext5");

function onClick5() {
    thetext5.classList.remove("dontshow");
    thetitle5.innerHTML = '<strong>Conventions of Usage</strong> <em>[collapse]</em>';
    
    thetitle5.removeEventListener("click", onClick5)
    thetitle5.addEventListener("click", collapseClick5);
}

function collapseClick5() {
    thetitle5.innerHTML = 'Conventions of Usage';
    thetext5.classList.add("dontshow");

    thetitle5.removeEventListener("click", collapseClick5);
    thetitle5.addEventListener("click", onClick5);
}

/* Sixth Bullet */
thetitle6 = document.getElementById("hidden6");

thetitle6.addEventListener("click", onClick6);

thetext6 = document.getElementById("hiddentext6");

function onClick6() {
    thetext6.classList.remove("dontshow");
    thetitle6.innerHTML = '<strong>Conventions of Punctuation</strong> <em>[collapse]</em>';
    
    thetitle6.removeEventListener("click", onClick6)
    thetitle6.addEventListener("click", collapseClick6);
}

function collapseClick6() {
    thetitle6.innerHTML = 'Conventions of Punctuation';
    thetext6.classList.add("dontshow");

    thetitle6.removeEventListener("click", collapseClick6);
    thetitle6.addEventListener("click", onClick6)
}

/* Development Question */
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

choiceA = document.getElementById("developmentA");
choiceA.addEventListener("click", onClickIncorrect);

choiceB = document.getElementById("developmentB");
choiceB.addEventListener("click", onClickIncorrect);

choiceC = document.getElementById("developmentC");
choiceC.addEventListener("click", onClickCorrect);

choiceD = document.getElementById("developmentD");
choiceD.addEventListener("click", onClickIncorrect);

incorrect.addEventListener("click", onClickOff)

function onClickOff () {
    incorrect.classList.remove("answer");
    incorrect.classList.add("dontshow")
}

