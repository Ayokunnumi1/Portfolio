const closeIcon = document.querySelector(".close-container");
const navLink = document.querySelector(".nav-link");
const hamburger = document.querySelector(".toolbar-hamburger")

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
    }
const menuClose = () => {
    navLink.classList.add("hide-link")
}

closeIcon.addEventListener("click", menuClose);
hamburger.addEventListener("click", menuOpen);





