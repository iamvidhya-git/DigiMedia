// Code line 2 to 21, only for menuIcon click and mouseover event to display and hide the menu respectively.

let menuIcon = document.querySelector("nav>.fa-bars");
let menu = document.querySelector("body>menu");

menuIcon.addEventListener('click', function() {
    if (menu.style.width === '0px') {
        menu.style.width = 'fit-content';
    } else {
        menu.style.width = '0px';
    }
});

