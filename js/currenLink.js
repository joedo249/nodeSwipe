const links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  if (links[i].pathname == document.location.pathname) {
    links[i].classList.add("current");
  }
}
