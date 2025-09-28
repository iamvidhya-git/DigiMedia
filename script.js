// Code line 2 to 21, only for menuIcon click and mouseover event to display and hide the menu respectively.

let menuIcon = document.querySelector("nav .fa-bars");
let menu = document.querySelector("body menu");

menuIcon.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

menuIcon.addEventListener("mouseover", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});



