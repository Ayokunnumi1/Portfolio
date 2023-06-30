const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
const links = document.querySelectorAll('.nav-link > li');
const headerHeroSection = document.querySelector('.header-hero-section');
const projectSection = document.querySelector('.project-section');
const popupSection = document.querySelector('.pop-up');
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

const projectElements = projects.map((project) => (
  `       <article class="project-container">
  <div>
      <a href="">
          <img src="${project.image}" alt="">
      </a>
  </div>
  <div class="project-description">
      <h2>${project.name}</h2>
      <ul class="experience-list">
          <li>CANOPY</li>
          <li>Backend Dev</li>
          <li>2015</li>
      </ul>
      <p>${project.description}</p>
      <ul class="skill-list">
      ${
  project.technologies.map((technology) => (
    `<li>${technology}</li>`
  )).join('')
  }
      </ul>
      <button id=${project.id}>
          See Project
      </button>
  </div>
</article>`
)).join('');
projectSection.insertAdjacentHTML('beforeend', projectElements);
const seeProjectBtns = projectSection.querySelectorAll('.project-description button');
function showPopUp(btn) {
  const objElement = projects.find((project) => project.id === btn.id);
  const element = ` <div class="overlay">
  <div class="head">
      <h2>${objElement.name}</h2>
      <img src="images/pop-up-close-icon.png" class="pop-up-close-icon" alt="">
  </div>
 <div class="project-description">
      <ul class="experience-list">
          <li>CANOPY</li>
          <li>Backend Dev</li>
          <li>2015</li>
      </ul>
      <img class="detail-img" src=${objElement.image} alt="">
 </div>
 <div class="flex-pop">
  <div class="pop-up-desc">
      <p>
        ${objElement.description}
      </p>
  </div>
  <div class="side-pop">
      <ul class="skill-list">
      ${
  objElement.technologies.map((technology) => (
    `<li>${technology}</li>`
  )).join('')
}
      </ul>
      <div class="see-container">
        <a href=${objElement.liveLink}>
          <button>
            <span>see live</span>
            <img src="images/see-live-icon.png" alt="">
          </button>
        </a>
      <a href=${objElement.sourceLink}>
        <button>
          <span>see source</span>
          <img src="images/see-source-icon.png" alt="">
        </button>
      </a>
    </div>
  </div>
 </div>
</div>`;

  popupSection.insertAdjacentHTML('beforeend', element);
}
seeProjectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    showPopUp(btn);
    popupSection.classList.add('show-popup');
    window.scrollTo(0, 0);
    const closePopBtn = popupSection.querySelector('.pop-up-close-icon');
    const scrollHeight = window.scrollY;
    closePopBtn.addEventListener('click', () => {
      popupSection.classList.remove('show-popup');
      popupSection.innerHTML = '';
      window.scrollTo(0, scrollHeight);
    });
  });
});
// start-contact-form-validation
const nameErrorMsg = document.getElementById('name-error-msg');
const emailErrorMsg = document.getElementById('email-error-msg');
const textErrorMsg = document.getElementById('text-error-msg');
const buttonErrorMsg = document.getElementById('submitErrorButton');

function validateName() {
  const name = document.getElementById('fullName').value;
  if (name.length === 0) {
    nameErrorMsg.innerHTML = 'Name is required';
    return false;
  }
  nameErrorMsg.style.display = 'none';
  return true;
}

function validateEmail() {
  const email = document.getElementById('email-address').value;
  if (email.length === 0) {
    emailErrorMsg.innerHTML = 'Email is required';
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailErrorMsg.innerHTML = 'Invalid Email';
    return false;
  }
  emailErrorMsg.style.display = 'none';
  return true;
}

const email = document.getElementById('email-address');
email.addEventListener('input', (event) => {
  const text = event.target.value;
  if (text !== text.toLowerCase()) {
    email.setCustomValidity('Please write email in LowerCase');
  } else {
    email.setCustomValidity('');
  }
});

function validateMessage() {
  const messages = document.getElementById('text-msg').value;
  const required = 30;
  const left = required - messages.length;
  if (left > 0 && left < 30) {
    textErrorMsg.innerHTML = `${left} characters left`;
    return false;
  }

  if (messages.length === required) {
    textErrorMsg.innerText = 'Message Complete';
    textErrorMsg.style.display = 'block';
  }
  return true;
}

const buttonClick = document.getElementById('contact-btn');

// eslint-disable-next-line consistent-return
function validateButton(event) {
  if (!validateName() && !validateEmail() && !validateMessage()) {
    buttonErrorMsg.style.display = 'block';
    setTimeout(() => { buttonErrorMsg.style.display = 'none'; }, 3000);
    buttonErrorMsg.innerHTML = 'Invalid form registration';
    event.preventDefault();
    return false;
  }
  if (validateName() || !validateEmail() || !validateMessage() === true) {
    buttonClick.submit();
  }
}

buttonClick.addEventListener('submit', validateButton);
// end-contact-form-validation

// start-local-storage-functionality
// Retrieve the form element and input element
const form = document.getElementById('contact-form');
const input = document.getElementById('fullName');
const localEmail = document.getElementById('email-address');
const text = document.getElementById('text-msg');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Store the input value in localStorage
  localStorage.setItem('myInputValue', input.value);
  localStorage.setItem('myEmailValue', localEmail.value);
  localStorage.setItem('myTextValue', text.value);

  // Reset the form
  form.reset();
});

// Check if the input value is stored in localStorage
if (localStorage.getItem('myInputValue')) {
  // Set the input value from localStorage
  input.value = localStorage.getItem('myInputValue');
  localEmail.value = localStorage.getItem('myEmailValue');
  text.value = localStorage.getItem('myTextValue');
}