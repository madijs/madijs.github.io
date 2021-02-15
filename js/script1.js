let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}


let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
showSlides2(slideIndex2 += n);
console.log('qwertyui')
}

function currentSlide2(n) {
showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
let i;
let slides = document.getElementsByClassName("mySlides2");
let dots = document.getElementsByClassName("dot2");
if (n > slides.length) {slideIndex2 = 1}    
if (n < 1) {slideIndex2 = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex2-1].style.display = "block";  
dots[slideIndex2-1].className += " active";
}

let slideIndex3 = 1;
    showSlides3(slideIndex3);

    function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
    }

    function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
    }

    function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    let dots = document.getElementsByClassName("dot3");
    if (n > slides.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " active";
    }

    let slideIndex4 = 1;
    showSlides4(slideIndex4);

    function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
    }

    function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
    }

    function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    let dots = document.getElementsByClassName("dot4");
    if (n > slides.length) {slideIndex4 = 1}    
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";  
    dots[slideIndex4-1].className += " active";
    }