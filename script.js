let body = document.body;
let overlay = document.querySelector('.overlay');
let menuMobile = document.querySelector('.menu-mobile');

function openNav() {
    body.style.overflowY = 'hidden'
    overlay.style.display = "block";
    setTimeout(() => {
        menuMobile.style.transform = "scaleY(1)"
    })
}

function closeNav() {
    setTimeout(() => {
        menuMobile.style.transform = "scaleY(0)"
    })
    overlay.style.display = "none";
    body.style.overflowY = 'auto'
}