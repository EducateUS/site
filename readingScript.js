thetitle = document.getElementById("hidden");

thetitle.addEventListener("click", onClick);

thetext = document.getElementById("hiddentext");

function onClick() {
    thetext.classList.remove("dontshow");
    thetitle.innerHTML = 'Information and Ideas <div id="collapse">(collapse)</div>';
}

collapsetext = document.getElementById("collapse");

collapsetext.addEventListener("click", collapseClick);

function collapseClick() {
    thetext.classList.add("dontshow");
}