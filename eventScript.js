//Links the expand button and close button
buttonOpen = document.getElementById("tips");
buttonClose = document.getElementById("close");

//Links the big PDF (hidden by default)
bigTip = document.getElementById("bigTip");

//Adds event listeners to each button
buttonOpen.addEventListener("click", expandTips);
buttonClose.addEventListener("click", closeTips);

//funtion to close the large content
function closeTips() {
    buttonClose.classList.remove("close");
    buttonClose.classList.add("dontShow");
    bigTip.classList.remove("bigpdf");
    bigTip.classList.add("dontShow");
}

function expandTips() {
    bigTip.classList.remove("dontShow");
    bigTip.classList.add("bigpdf");
    buttonClose.classList.remove("dontShow");
    buttonClose.classList.add("close");

}

