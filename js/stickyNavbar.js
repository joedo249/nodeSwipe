// Get the offset position of the navbar
const navbar = document.querySelector(".fixnavbar");
const navbarHeight = navbar.offsetTop;
//console.log(navbarHeight);

// Add the sticky class to the navbar when scroll position is reached
// Remove the sticky class when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= navbarHeight) {
    console.log(window.pageYOffset);
    navbar.classList.addClass("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
