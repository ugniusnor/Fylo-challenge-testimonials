const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll (".slide");

let a=0

function nextSlide () {
   
    if(a==0){
    slides[a].style.display="none"
    slides[a+1].style.display="flex"
    a++;
}
else {
    slides[a-1].style.display="flex"
    slides[a].style.display="none"
    return a=0;
}
}
function prevSlide () {
    if (a==0) {
        slides[a].style.display="none";
        slides[a+1].style.display="flex"
        a++;
    
    }
    else {
        slides[a].style.display="none";
        slides[a-1].style.display="flex";
        return a=0;
    }
}
