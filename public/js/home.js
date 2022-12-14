//Variables
const menuBar = document.querySelector(".menu-bar img");
const tabs = document.querySelector(".tabs");
const xBar = document.getElementById("menu-img");

var slides = document.querySelector(".slide-image").children;
var prev = document.querySelector(".prev img");
var next = document.querySelector(".next img");
var totalSlides = slides.length;
var index = 0;

//Change menu bar image
let toggle = true;
xBar.addEventListener("click", function(){
    toggle = !toggle;
    if(toggle){
        xBar.src = "img/menu.png";
    }
    else{
        xBar.src = "img/close.png";
    }
})


//Mobile Menu bar
menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    tabs.classList.toggle("active");
})

document.querySelectorAll(".tab-link").forEach(n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    tabs.classList.remove("active");
}))


//Image Slider//

next.onclick = function(){
    nextSlide("next");
    resetTimer();
}
prev.onclick = function(){
    nextSlide("prev");
    resetTimer();
}


function nextSlide(direction){
   if(direction=="next"){
       index++;
       if(index==totalSlides){
           index=0;
       }

   }

   else{
       if(index==0){
           index=totalSlides-1;
          }
         else{
             index--;
         }
   }

   for(i=0;i<slides.length;i++){
       slides[i].classList.remove("active");
   }
   slides[index].classList.add("active");
}

function resetTimer(){
   clearInterval(timer);
   timer = setInterval(autoPlay,2000);
}

function autoPlay(){
   nextSlide("next");
}

var timer = setInterval(autoPlay,2000);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
  
  //to see errors on console//
  console.log("Hello");