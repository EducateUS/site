/***************************  First Bullet *********************/
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

/*************************** Second Bullet ********************/
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

/******************************** Third Bullet *********************/
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

/******************************** Fourth Bullet *******************/
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

/***************************** Fifth Bullet ********************/
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

/****************************** Sixth Bullet ***************/
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


/******************************** QUESTIONS ********************/
/************************* Development Question *************/

/*make question and answer choices appear*/
expandQuestion = document.getElementById("expand");
expandQuestion.addEventListener("click", expandClick);

expand1 = document.getElementById("1");
expand2 = document.getElementById("2");
expand3 = document.getElementById("3");
expand4 = document.getElementById("4");

function expandClick() {
    expand1.classList.toggle("dontshow");
    expand1.classList.toggle("questionImage");
    expand2.classList.toggle("dontshow");
    expand3.classList.toggle("dontshow");
    expand3.classList.toggle("questionCredit");
    expand4.classList.toggle("dontshow");
    expand4.classList.toggle("answer")
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

choiceA = document.getElementById("developmentA");
choiceA.addEventListener("click", onClickIncorrect);

choiceB = document.getElementById("developmentB");
choiceB.addEventListener("click", onClickIncorrect);

choiceC = document.getElementById("developmentC");
choiceC.addEventListener("click", onClickCorrect);

choiceD = document.getElementById("developmentD");
choiceD.addEventListener("click", onClickIncorrect);

incorrect.addEventListener("click", onClickOff)
correct.addEventListener("click", onClickOff)

function onClickOff () {
    incorrect.classList.remove("answer");
    incorrect.classList.add("dontshow");
    
    correct.classList.remove("answer");
    correct.classList.add("dontshow");
}


/*******************Organization Question******************/

/*make question and answer choices appear*/

expandQuestion3 = document.getElementById("expand3");
expandQuestion3.addEventListener("click", expandClick3);

expando1 = document.getElementById("o1");
expando2 = document.getElementById("o2");
expando3 = document.getElementById("o3");
expando4 = document.getElementById("o4");

function expandClick3() {
    expando1.classList.toggle("dontshow");
    expando1.classList.toggle("questionImage");
    expando2.classList.toggle("dontshow");
    expando3.classList.toggle("dontshow");
    expando3.classList.toggle("questionCredit");
    expando4.classList.toggle("dontshow");
    expando4.classList.toggle("answer")
} 

/*make answer responses appear*/

incorrect3a = document.getElementById("incorrectAnswer3a");
incorrect3c = document.getElementById("incorrectAnswer3c");
incorrect3d = document.getElementById("incorrectAnswer3d")
correct3 = document.getElementById("correctAnswer3")

function onClickIncorrect3a() {
    incorrect3a.classList.remove("dontshow");
    incorrect3a.classList.add("answer");
    incorrect3a.style.backgroundColor = "#3b3c6e";
}

function onClickIncorrect3c() {
    incorrect3c.classList.remove("dontshow");
    incorrect3c.classList.add("answer");
    incorrect3c.style.backgroundColor = "#3b3c6e";
}

function onClickIncorrect3d() {
    incorrect3d.classList.remove("dontshow");
    incorrect3d.classList.add("answer");
    incorrect3d.style.backgroundColor = "#3b3c6e";
}

function onClickCorrect3() {
    correct3.classList.remove("dontshow");
    correct3.classList.add("answer");
    correct3.style.backgroundColor = "#3b3c6e"
}

choiceoA = document.getElementById("organizationA");
choiceoA.addEventListener("click", onClickIncorrect3a);

choiceoB = document.getElementById("organizationB");
choiceoB.addEventListener("click", onClickCorrect3);

choiceoC = document.getElementById("organizationC");
choiceoC.addEventListener("click", onClickIncorrect3c);

choiceoD = document.getElementById("organizationD");
choiceoD.addEventListener("click", onClickIncorrect3d);

incorrect3a.addEventListener("click", onClickOff3)
incorrect3c.addEventListener("click", onClickOff3)
incorrect3d.addEventListener("click", onClickOff3)
correct3.addEventListener("click", onClickOff3)

function onClickOff3 () {
    incorrect3a.classList.remove("answer");
    incorrect3a.classList.add("dontshow");
    
    incorrect3c.classList.remove("answer");
    incorrect3c.classList.add("dontshow");

    incorrect3d.classList.remove("answer");
    incorrect3d.classList.add("dontshow");

    correct3.classList.remove("answer");
    correct3.classList.add("dontshow");
}


/**************Sentence Structure Question******************/

/*make question and answer choices appear*/
expandQuestion2 = document.getElementById("expand2");
expandQuestion2.addEventListener("click", expandClick2);

expands1 = document.getElementById("s1");
expands2 = document.getElementById("s2");
expands3 = document.getElementById("s3");
expands4 = document.getElementById("s4");

function expandClick2() {
    expands1.classList.toggle("dontshow");
    expands1.classList.toggle("questionImage");
    expands2.classList.toggle("dontshow");
    expands3.classList.toggle("dontshow");
    expands3.classList.toggle("questionCredit");
    expands4.classList.toggle("dontshow");
    expands4.classList.toggle("answer")
} 

/*make answer responses appear*/
incorrect2 = document.getElementById("incorrectAnswer2");
correct2 = document.getElementById("correctAnswer2")

function onClickIncorrect2() {
    incorrect2.classList.remove("dontshow");
    incorrect2.classList.add("answer");
    incorrect2.style.backgroundColor = "#3b3c6e";
}

function onClickCorrect2() {
    correct2.classList.remove("dontshow");
    correct2.classList.add("answer");
    correct2.style.backgroundColor = "#3b3c6e"
}

choicesA = document.getElementById("sentenceA");
choicesA.addEventListener("click", onClickIncorrect2);

choicesB = document.getElementById("sentenceB");
choicesB.addEventListener("click", onClickIncorrect2);

choicesC = document.getElementById("sentenceC");
choicesC.addEventListener("click", onClickCorrect2);

choicesD = document.getElementById("sentenceD");
choicesD.addEventListener("click", onClickIncorrect2);

incorrect2.addEventListener("click", onClickOff2)
correct2.addEventListener("click", onClickOff2)

function onClickOff2 () {
    incorrect2.classList.remove("answer");
    incorrect2.classList.add("dontshow");
    
    correct2.classList.remove("answer");
    correct2.classList.add("dontshow");
}



