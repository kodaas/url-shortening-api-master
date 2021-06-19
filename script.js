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

function getFormInput() {
    let form = document.querySelector('form')
    let label = document.querySelector('label')
    let link = form.link

    if (!link.value || !link.value.include('://') || !link.value.include('.')) {
        label.style.display = "block"
        link.classList.add('bad')
    } else {
        getShortLink(link.value).then((data) => {
            console.log(data)
        })
    }
}
