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
window.addEventListener('scroll', scrollAction);
