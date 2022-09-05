collapsetext = null;

thetitle = document.getElementById("hidden");

thetitle.addEventListener("click", onClick);

thetext = document.getElementById("hiddentext");

function onClick() {
    thetext.classList.toggle("dontshow");
    thetitle.innerHTML = 'Information and Ideas <span id="collapse"><em>(collapse)</em></span>';
    collapsetext = document.getElementById("collapse");

    collapsetext.addEventListener("click", collapseClick);
}

function collapseClick() {
    thetext.classList.toggle("dontshow");
    thetitle.innerHTML = '';
}