//@@include('_alert.js');

var button = document.querySelector(".sidebar-button");
var sidebar = document.querySelector(".sidebar");
var close = document.querySelector(".sidebar-close");

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  sidebar.classList.add("sidebar-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (par.hasClass("sidebar-show"));
  sidebar.classList.remove("sidebar-show");
});
