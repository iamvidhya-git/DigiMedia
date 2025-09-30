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

menuIcon.addEventListener('mousemove', function() {
        menu.style.width = 'fit-content';
});


// line 6 to  12 और 15 से 21 के जगह आप इस कोड को उपयोग कर सकते है पर कोई एक रहने दे । 

// menuIcon.addEventListener('click', toggleMenu);
// menuIcon.addEventListener('mouseover', toggleMenu);

// function toggleMenu() {
//     if (menu.style.width === '0px' || menu.style.width === '') {
//         menu.style.width = '150px';
//     } else {
//         menu.style.width = '0px';
//     }
// }
