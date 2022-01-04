var navbar = document.getElementById("test");
var hamberger = document.getElementById("menu");
var sticky = navbar.offsetTop;

//add adnimation on viewpoint of the user
function reveal() {
  var reveals = document.querySelectorAll(".reveal");


  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 75;


    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function scrollAction(){
  if (window.pageYOffset >= sticky) {
   navbar.classList.add("sticky");
   // hamberger.classList.add("theMenu");

 } else {
   navbar.classList.remove("sticky");
   // hamberger.classList.remove("theMenu");
 }
}
function openNav() {
  document.getElementById("blackBar").style.right = "0";
}
var numberOfButtons = document.querySelectorAll(".clickMe").length;

for (var i = 0;i < numberOfButtons;i++){
  document.querySelectorAll(".clickMe")[i].addEventListener("click", function() {

    document.getElementById("blackBar").style.right = "600px";
    
  });
}



window.addEventListener('scroll', scrollAction);
window.addEventListener("scroll", reveal);
