/*** credit to: https://ohelen44.github.io/CTIS230Final/artjs.js *///

quizQuestions = document.getElementById("quizQuestions");

/**********************one winner results****************/
ayushResults = document.getElementById("ayushResults");
austinResults = document.getElementById("austinResults");
zoeResults = document.getElementById("zoeResults");
jiyaResults = document.getElementById("jiyaResults");

/*************************tied results*******************/
ayushAustinResults = document.getElementById("ayushAustinResults");
ayushZoeResults = document.getElementById("ayushZoeResults");
ayushJiyaResults = document.getElementById("ayushJiyaResults");
austinZoeResults = document.getElementById("austinZoeResults");
austinJiyaResults = document.getElementById("austinJiyaResults");
zoeJiyaResults = document.getElementById("zoeJiyaResults");

/*************************3+ way tie results*************/
tieResults = document.getElementById("tieResults");

submitQuiz = document.getElementById("submitQuiz");
submitQuiz.addEventListener("click", endQuiz);

function endQuiz(){
    var ayushscore = 0;
    var austinscore = 0;
    var zoescore = 0;
    var jiyascore = 0;

    var ayushtop = false;
    var austintop = false;
    var zoetop = false;
    var jiyatop = false;
    
    if(document.getElementById("blackcolor").checked){
        ayushscore += 1;
    }
    else if(document.getElementById("redcolor").checked) {
        austinscore += 1;
    }
    else if(document.getElementById("purplecolor").checked){
        jiyascore += 1;
    }
    else if(document.getElementById("bluecolor").checked){
        zoescore += 1;
    }
    else {
    }

    if(document.getElementById("chickenfood").checked){
        jiyascore += 1;
    }
    else if(document.getElementById("wingsfood").checked) {
        ayushscore += 1;
    }
    else if(document.getElementById("macfood").checked){
        austinscore += 1;
    }
    else if(document.getElementById("cinnamonfood").checked){
        zoescore += 1;
    }
    else {
    }

    if(document.getElementById("sciencesubject").checked){
        jiyascore += 1;
    }
    else if(document.getElementById("chemsubject").checked) {
        ayushscore += 1;
    }
    else if(document.getElementById("mathsubject").checked){
        austinscore += 1;
    }
    else if(document.getElementById("historysubject").checked){
        zoescore += 1;
    }
    else {
    }

    if(document.getElementById("historicalbook").checked){
        jiyascore += 1;
    }
    else if(document.getElementById("dystopianbook").checked) {
        ayushscore += 1;
    }
    else if(document.getElementById("creativebook").checked){
        austinscore += 1;
    }
    else if(document.getElementById("fictionbook").checked){
        zoescore += 1;
    }
    else {
    }

    if ((ayushscore != 0) && (ayushscore >= austinscore) && (ayushscore >= jiyacore) && (ayushscore >= zoescore)) {
        ayushtop = true;
    }
    if ((austinscore != 0) && (austinscore >= ayushscore) && (austinscore >= jiyascore) && (ayushscore >= zoescore)) {
        austintop = true;
    }
    if ((zoescore != 0) && (zoescore >= ayushascore) && (zoescore >= austinscore) && (zoescore >= jiyascore)) {
        zoetop = true;
    }
    if ((jiyascore != 0) && (jiyascore >= ayushscore) && (jiyascore >= ayushscore) && (jiyascore >= zoescore)) {
        jiyatop = true;
    }
    else {
    }

    if(ayushtop && !austintop && !zoetop && !jiyatop) {
        ayushResults.classList.remove("dontshow");
        ayushResults.classList.add("tutorResults")
    }
    else if(austintop && !ayushtop && !zoetop && !jiyatop) {
        austinResults.classList.remove("dontshow");
    }
    else if(zoetop && !ayushtop && !austintop && !jiyatop) {
        zoeResults.classList.remove("dontshow");
    }
    else if(jiyatop && !ayushtop && !zoetop && !austintop) {
        jiyaResults.classList.remove("dontshow");
    }

    else if(austintop && ayushtop && !zoetop && !jiyatop) {
        ayushAustinResults.classList.remove("dontshow");
    }
    else if(ayushtop && zoetop && !austintop && !jiyatop) {
        ayushZoeResults.classList.remove("dontshow");
    }
    else if(ayushtop && jiyatop && !austintop && !zoetop) {
        ayushJiyaResults.classList.remove("dontshow");
    }

    else if(austintop && zoetop && !ayushtop && !jiyatop) {
        austinZoeResults.classList.remove("dontshow");
    }
    else if(austintop && jiyatop && !zoetop && !ayushtop) {
        austinJiyaResults.classList.remove("dontshow");
    }

    else if(zoetop && jiyatop && !austintop && !ayushtop) {
        zoeJiyaResults.classList.remove("dontshow");
    }

    else {
        tieResults.classList.remove("dontshow");
    }   

}
