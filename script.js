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

async function getShortLink(link) {

    let URI = `https://api.shrtco.de/v2/shorten?url=${link}`

    let res = await fetch(URI,);

    if (!res.ok) {
        throw new Error("cannot fetch data");
    }
    let data = await res.json();

    return data;

}

let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    
    e.preventDefault()

    let label = document.querySelector('label')
    let link = form.link

    if (!link.value) {
        label.style.display = "block"
        link.classList.add('bad')
    } else {
        label.style.display = "none"
        if (label.classList.contains('bad')) label.classList.remove('bad')
        getShortLink(link.value)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            label.innerHTML = "Invalid Link"
            label.style.display = "block"
            link.classList.add('bad')
        })
    }
}) 

