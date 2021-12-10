/*
window.onload = function() {
    if (!("hasRunBefore" in sessionStorage)) {
      document.getElementById("first").click();
      sessionStorage.setItem("hasRunBefore", true);
    }
  }
  */

function indexClick() {
  if (!("hasRunBefore" in sessionStorage)) {
    document.getElementById("first").click();
    sessionStorage.setItem("hasRunBefore", true);
  }
  window.onload = indexClick;
  //body.onload = indexClick; ???
}



window.onload = function () {
  const indexPage = document.querySelector(".first");
  console.log(indexName.className);
  function toggleClass() {
    indexName.classList.toggle("current");
    console.log(indexName.className);
  }
};


