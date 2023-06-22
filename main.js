const closeIcon = document.querySelector('.close-container');
const navLink = document.querySelector('.nav-link');
const hamburger = document.querySelector('.toolbar-hamburger');
const headerSection = document.querySelector('.header-hero-section');
const toolBarSection = document.querySelector('.toolbar-section > a');
const closeButton = document.querySelector('.close-button');
const workSectionContainer = document.querySelector('.work--section');
const popupSection = document.querySelector('.pop-up');
const workSections = [
  {
    name: 'tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/2nd pic.svg',
    skillLists: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.tonicLive.com',
    sourceLink: 'https://www.github.com/Ayokunnumi1',
  },
  {
    name: 'Multi-Post strories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/22nd pic.svg',
    skillLists: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.muli-post.com',
    sourceLink: 'https://www.github.com/Ayokunnumi1',
  },
  {
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/3rd pic.svg',
    skillLists: ['HTML', 'CSS', 'javascript'],
    liveLink: 'https://www.tonicLive.com',
    sourceLink: 'https://www.github.com/Ayokunnumi1',
  },
  {
    name: 'uber navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/2nd Desktop2 pic.svg',
    skillLists: ['HTML', 'Ruby on rails', 'CSS', 'javascript'],
    liveLink: 'https://www.uber.com',
    sourceLink: 'https://www.github.com/Ayokunnumi1',
  },
];

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
const modalClose = () => {
  const modalWindow = document.querySelector('.modal');
  modalWindow.parentElement.removeChild(modalWindow);
};

const workElements = workSections.map((workSection) => (
  `       <div class="parent--container parent--one">
          <div class="first--child first-desktop-pic">
          <a href="#">
          <img src="${workSection.image}" alt="">
          </a>
          </div>
  <div class="second--child">
      <h2>${workSection.name}</h2>
      <ul class="ul--list">
          <li>CANOPY</li>
          <li>Back End Dev</li>
          <li>2015</li>
      </ul>
      <p>${workSection.description}</p>
      <ul class="skill--list">
      ${
  workSection.skillLists.map((skillList) => (
    `<li>${skillList}</li>`
  )).join('')
  }
      </ul>
      <button class="see--project">
          See Project
      </button>
  </div>
     </div>`
)).join('');

workSectionContainer.insertAdjacentHTML('beforeend', workElements);

const seeProjectBtns = workSectionContainer.querySelectorAll('.project-description button');
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
    closePopBtn.addEventListener('click', () => {
      popupSection.classList.remove('show-popup');
      popupSection.innerHTML = '';
    });
  });
});

closeIcon.addEventListener('click', menuClose);
hamburger.addEventListener('click', menuOpen);
closeButton.addEventListener('click', modalClose);
