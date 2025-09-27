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

// Code line 2 to 21, only for menuIcon click and mouseover event to display and hide the menu respectively.
// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Yahaan hum variable banayenge
    var linkURL = 'https://facebook.com';
    
    // Sabhi anchor tags ko select karke unka href attribute update karenge
    var links = document.querySelectorAll('.home_anchor');
    
    links.forEach(function(link) {
        link.setAttribute('href', linkURL);
        link.setAttribute('target', '_blank'); // New tab mein kholne ke liye
    });
});
