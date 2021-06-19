let body = document.body;
let overlay = document.querySelector('.overlay');
let menuMobile = document.querySelector('.menu-mobile');
let Links = [];

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
    let btn = document.querySelector('#submit')
    let link = form.link

    if (!link.value) {
        label.style.display = "block"
        link.style.border = "2px solid var(--secondary-red)"
        link.classList.add('bad')
    } else {
        label.style.display = "none"
        link.style.border = "2px solid var(--primary-cyan)"
        btn.innerHTML = `<div id="loader" style="margin: 0px 30px"></div>`
        getShortLink(link.value)
        .then((data) => {
            Links.unshift(data)
            btn.innerHTML = "Shorten It!"
            console.log(Links)
        })
        .catch((err) => {
            console.log(err)
            label.innerHTML = "Failed Check Internet Connection ;("
            label.style.display = "block"
            btn.innerHTML = "Shorten It!"
            link.style.border = "2px solid var(--secondary-red)"
            link.classList.add('bad')
        })
    }
})


// const locals = (key , func, val = "") => {
//     if (func === 'get') {
//         let a = localStorage.getItem(key)
//         return a
//     } else if (func === 'set') {
//         if (!val) {
//             let a = localStorage.setItem(key, JSON.stringify(val[0]))
//             return a
//         }else {return false}
//     } else if (func === 'remove') {
//         let a = localStorage.removeItem(key)
//         return a
//     } else if (func === 'clear') {
//         localStorage.clear()
//     } else { return false }
// }

