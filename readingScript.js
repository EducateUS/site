/* First Bullet */
thetitle = document.getElementById("hidden");

thetitle.addEventListener("click", onClick);

thetext = document.getElementById("hiddentext");

function onClick() {
    thetext.classList.remove("dontshow");
    thetitle.innerHTML = '<strong>Information and Ideas</strong> <em>[collapse]</em>';
    
    thetitle.removeEventListener("click", onClick)
    thetitle.addEventListener("click", collapseClick);
}

function collapseClick() {
    thetitle.innerHTML = 'Information and Ideas';
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
    thetitle2.innerHTML = '<strong>Rhetoric</strong> <em>[collapse]</em>';
    
    thetitle2.removeEventListener("click", onClick2)
    thetitle2.addEventListener("click", collapseClick2);
}

function collapseClick2() {
    thetitle2.innerHTML = 'Rhetoric';
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
    thetitle3.innerHTML = '<strong>Synthesis</strong> <em>[collapse]</em>';
    
    thetitle3.removeEventListener("click", onClick3)
    thetitle3.addEventListener("click", collapseClick3);
}

function collapseClick3() {
    thetitle3.innerHTML = 'Synthesis';
    thetext3.classList.add("dontshow");

    thetitle3.removeEventListener("click", collapseClick3);
    thetitle3.addEventListener("click", onClick3)
}


