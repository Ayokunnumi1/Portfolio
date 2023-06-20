const closeIcon = document.querySelector(".close-container");
const navLink = document.querySelector(".nav-link");
const hamburger = document.querySelector(".toolbar-hamburger");
const body = document.getElementsByTagName('body')[0];

// const menuClose = () => { 
//     closeIcon.style.display = 'none';
//     navLink.style.display = 'none';
//     hamburger.style.display = '';
//     closeIcon.style
// }

// const menuOpen = () => {
//     navLink.style.display = '';
//     closeIcon.style.display = '';
//     hamburger.style.display = 'none';
// }

const menuOpen = () => {
    navLink.classList.remove("hide-link") 
    body.style = 'overflow: hidden;'
    }
const menuClose = () => {
    navLink.classList.add("hide-link")
    body.style = '';
}

closeIcon.addEventListener("click", menuClose);
hamburger.addEventListener("click", menuOpen);
navLink.addEventListener("click",menuClose)





