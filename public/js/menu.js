//Variables
const menuBar = document.querySelector(".menu-bar img");
const tabs = document.querySelector(".tabs");
const xBar = document.getElementById("menu-img");

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

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
  
  //to see errors on console//
  console.log("Hello");