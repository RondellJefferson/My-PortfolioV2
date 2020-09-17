var navbar = document.getElementById("test");
var hamberger = document.getElementById("menu");
var sticky = navbar.offsetTop;

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
