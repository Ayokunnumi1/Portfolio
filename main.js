const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
const links = document.querySelectorAll('.nav-link > li');
const headerHeroSection = document.querySelector('.header-hero-section');
const projectSection = document.querySelector('.project-section');
// const popupSection = document.querySelector('.pop-up');
const projects = [
  {
    name: 'tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/tonic.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://github.com/Ayokunnumi1',
    id: 'tonic',
  },
  {
    name: 'multi-Post stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/multi-stories.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://github.com/Ayokunnumi1',
    id: 'stories',
  },
  {
    name: 'facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/facebook360.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://github.com/Ayokunnumi1',
    id: 'facebook',
  },
  {
    name: 'uber navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/uber.png',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://github.com/Ayokunnumi1',
    id: 'uber',
  },
];
hamburgerIcon.addEventListener('click', () => {
  navLink.classList.add('show-link');
  headerHeroSection.classList.add('blur-header-hero-section');
});

closeIcon.addEventListener('click', () => {
  navLink.classList.remove('show-link');
  headerHeroSection.classList.remove('blur-header-hero-section');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    navLink.classList.remove('show-link');
    headerHeroSection.classList.remove('blur-header-hero-section');
  });
});
