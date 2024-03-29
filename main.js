const navLink = document.querySelector('.nav-link');
const hamburgerIcon = document.querySelector('.toolbar-hamburger');
const closeIcon = document.querySelector('.close-container');
const links = document.querySelectorAll('.nav-link > li');
const headerHeroSection = document.querySelector('.header-hero-section');
const projectSection = document.querySelector('.project-section');
const popupSection = document.querySelector('.pop-up');
const dropdowns = document.querySelectorAll('.dropdown');

const projects = [
  {
    name: 'Mentor Me Now',
    description: 'Mentor Me Now is a user-friendly platform connecting individuals with expert mentors for personal and professional growth. Seamlessly navigate through curated mentors, manage reservations, and harness the power of mentorship to accelerate your journey to success.',
    image: 'images/mentor-me-now.gif',
    technologies: ['Ruby On Rails', 'React', 'Redux', 'tailwind', 'Postgres'],
    liveLink: 'https://mentor-me-noww.vercel.app/',
    sourceLink: 'https://github.com/Ayokunnumi1/mentor_me_now_front_end_app',
    id: 'mentor',
  },
  {
    name: 'Wise Spender',
    description: 'This is a mobile web app where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    image: 'images/budget-app.gif',
    technologies: ['Ruby On Rails', 'Javascript', 'Postgres'],
    liveLink: 'https://wise-spender.onrender.com/',
    sourceLink: 'https://github.com/Ayokunnumi1/wise-spender',
    id: 'wise-spender',
  },
  {
    name: 'Reelflix Movies',
    description: 'A movie website that displays several Tv shows from an external API',
    image: 'images/reelflix.gif',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://ayokunnumi1.github.io/reelflix-movies/dist/',
    sourceLink: 'https://github.com/Ayokunnumi1/reelflix-movies',
    id: 'reelflix',
  },
  {
    name: 'LeaderBoard',
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
    image: './images/Leaderboard-gif.gif',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://ayokunnumi1.github.io/Leaderboard/dist/',
    sourceLink: 'https://github.com/Ayokunnumi1/Leaderboard',
    id: 'facebook',
  },
  {
    name: 'Awesome Books',
    description: '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list.',
    image: 'images/awesome-books.gif',
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    liveLink: 'https://ayokunnumi1.github.io/Awesome-Books/',
    sourceLink: 'https://github.com/Ayokunnumi1/Awesome-Books',
    id: 'tonic',
  },
  {
    name: 'Rock Paper Scissors',
    description: 'A fun game built with vanilla javascript',
    image: 'images/RPS.gif',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://ayokunnumi1.github.io/Odin-Rock-Paper-Scissors/',
    sourceLink: 'https://github.com/Ayokunnumi1/Odin-Rock-Paper-Scissors',
    id: 'uber',
  },
];
hamburgerIcon.addEventListener('click', () => {
  navLink.classList.add('show-link');
  headerHeroSection.classList.add('blur-header-hero-section');
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  navLink.classList.remove('show-link');
  headerHeroSection.classList.remove('blur-header-hero-section');
  closeIcon.style.display = 'none';
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    navLink.classList.remove('show-link');
    headerHeroSection.classList.remove('blur-header-hero-section');
  });
});

const projectElements = projects.map((project) => (
  `       <article class="project-container">
  <div class="project-img-container>
      <a href="">
          <img src="${project.image}" alt="" class="project-img">
      </a>
  </div>
  <div class="project-description">
      <h2>${project.name}</h2>
      <ul class="experience-list">
          <li>CANOPY</li>
          <li>Full stack Dev</li>
          <li>2023</li>
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
  // console.log(objElement);
  const element = ` <div class="overlay">
  <div class="head">
      <h2>${objElement.name}</h2>
      <img src="images/pop-up-close-icon.png" class="pop-up-close-icon" alt="">
  </div>
 <div class="project-description">
      <ul class="experience-list">
          <li>CANOPY</li>
          <li>Full stack Dev</li>
          <li>2023</li>
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
        <a href=${objElement.liveLink} target="_blank">
          <button>
            <span>see live</span>
            <img src="images/see-live-icon.png" alt="">
          </button>
        </a>
      <a href=${objElement.sourceLink} target="_blank">
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

dropdowns.forEach((dropdown) => {
  const arrow = dropdown.querySelector('.arrow-down');
  const dropDownList = dropdown.querySelector('.dropdown-list');

  arrow.addEventListener('click', () => {
    if (arrow.src.endsWith('images/chevron_down.png')) {
      dropDownList.style.display = 'none';
      arrow.src = 'images/chevron_right.png';
    } else {
      dropDownList.style.display = 'block';
      arrow.src = 'images/chevron_down.png';
    }
  });
});

// Activate scroll effect
window.addEventListener('scroll', () => {
  const toolbar = document.querySelector('.toolbar-section');
  if (window.pageYOffset > 0) {
    toolbar.classList.add('scrolled');
  } else {
    toolbar.classList.remove('scrolled');
  }
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
const form = document.getElementById('contact-form');
const input = document.getElementById('fullName');
const localEmail = document.getElementById('email-address');
const text = document.getElementById('text-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  localStorage.setItem('myInputValue', input.value);
  localStorage.setItem('myEmailValue', localEmail.value);
  localStorage.setItem('myTextValue', text.value);

  form.reset();
});

if (localStorage.getItem('myInputValue')) {
  input.value = localStorage.getItem('myInputValue');
  localEmail.value = localStorage.getItem('myEmailValue');
  text.value = localStorage.getItem('myTextValue');
}
// End-local-storage-functionality