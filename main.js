const closeIcon = document.querySelector('.close-container');
const navLink = document.querySelector('.nav-link');
const hamburger = document.querySelector('.toolbar-hamburger');
const headerSection = document.querySelector('.header-hero-section');
const toolBarSection = document.querySelector('.toolbar-section > a');
const menuOpen = () => {
  navLink.classList.remove('hide-link');
  headerSection.classList.add('blur-header');
  toolBarSection.classList.add('blur-logo');
  hamburger.classList.add('blur-hamburger');
};
const menuClose = () => {
  navLink.classList.add('hide-link');
  headerSection.classList.remove('blur-header');
  toolBarSection.classList.remove('blur-logo');
  hamburger.classList.remove('blur-hamburger');
};

closeIcon.addEventListener('click', menuClose);
hamburger.addEventListener('click', menuOpen);
