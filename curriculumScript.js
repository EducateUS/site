//Link with the expand buttons and the close button
button1 = document.getElementById("math1");
button2 = document.getElementById("math2");
button8 = document.getElementById("math8");
buttonX = document.getElementById("close");

// Gets the large PDFS (currently hidden)
pdf1 = document.getElementById("big1");
pdf2 = document.getElementById("big2");
pdf8 = document.getElementById("big8");

//adds event listeners to each button
button1.addEventListener("click", expand1);
button2.addEventListener("click", expand2);
button8.addEventListener("click", expand8);
buttonX.addEventListener("click", closePDF);

function closePDF() {
    buttonX.classList.remove("close");
    buttonX.classList.add("dontShow");
    pdf1.classList.remove("bigpdf");
    pdf1.classList.add("dontShow");
    pdf2.classList.remove("bigpdf");
    pdf2.classList.add("dontShow");
    pdf8.classList.remove("bigpdf");
    pdf8.classList.add("dontShow");
}

function expand1() { 
    pdf1.classList.remove("dontShow"); 
    pdf1.classList.add("bigpdf");
    buttonX.classList.remove("dontShow");
    buttonX.classList.add("close");
}


function expand2() { 
    pdf2.classList.remove("dontShow"); 
    pdf2.classList.add("bigpdf");
    buttonX.classList.remove("dontShow");
    buttonX.classList.add("close") ;
}
function expand8() { 
    pdf8.classList.remove("dontShow"); 
    pdf8.classList.add("bigpdf");
    buttonX.classList.remove("dontShow"); 
    buttonX.classList.add("close");
}

/*function closePDF() {
    pdf1.classList.add("dontShow");
    pdf2.classList.add("dontShow");
    pdf8.classList.add("dontShow");
    buttonX.classList.add("dontShow");
}
*/