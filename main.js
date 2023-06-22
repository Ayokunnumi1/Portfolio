const closeIcon = document.querySelector('.close-container');
const navLink = document.querySelector('.nav-link');
const hamburger = document.querySelector('.toolbar-hamburger');
const body = document.getElementsByTagName('body')[0];
const workSection = document.querySelector('.work--section');

const menuOpen = () => {
  navLink.classList.remove('hide-link');
  body.style = 'overflow: hidden;';
};

const menuClose = () => {
  navLink.classList.add('hide-link');
  body.style = '';
};

const projectsData = [
  {
    title: 'Tonic',
    year: '2015',
    shortname: 'CANOPY',
    role: 'Back End Dev',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required." ,
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/2nd pic.svg',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories',
    year: '2015',
    shortname: 'CANOPY',
    role: 'Back End Dev',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required." ,
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/22nd pic.svg',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories',
    year: '2015',
    shortname: 'CANOPY',
    role: 'Back End Dev',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required." ,
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/22nd pic.svg',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
  {
    title: 'Multi-Post Stories',
    year: '2015',
    shortname: 'CANOPY',
    role: 'Back End Dev',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required." ,
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/22nd pic.svg',
    link: 'https://s2jack.github.io/',
    github: 'https://github.com/s2jack/create-portfolio-website1',
  },
];

const loadWorkSection = (data) => {
  const card01 = document.createElement('div')
  card01.className = 'parent--container parent--one'
  workSection.appendChild(card01)
  const prImgCont01 = document.createElement('div')
  prImgCont01.className = 'first--child first-desktop-pic'
  card01.appendChild(prImgCont01)
  const imgCont01 = document.createElement('a')
  prImgCont01.appendChild(imgCont01)
  const prImg01 = document.createElement('img')
  prImg01.className = 'img'
  prImg01.src = data[0]['image']
  prImgCont01.appendChild(prImg01)
  const prDetailCont01 = document.createElement('div')
  prDetailCont01.className = 'second--child'
  card01.appendChild(prDetailCont01)
  const prTitle01 = document.createElement('h2')
  prTitle01.innerText = data[0]["title"]
  prDetailCont01.appendChild(prTitle01)
  const infoList01 = document.createElement('ul')
  infoList01.className = 'ul--list'
  prDetailCont01.appendChild(infoList01)
  const shortname01 = document.createElement('li')
  shortname01.innerText = data[0]['shortname']
  infoList01.appendChild(shortname01)
  const role01 = document.createElement('li')
  role01.innerText = data[0]['role']
  infoList01.appendChild(role01)
  const year01 = document.createElement('li')
  year01.innerText = data[0]['year']
  infoList01.appendChild(year01)
  const description01 = document.createElement('p')
  description01.innerText = data[0]['description']
  prDetailCont01.appendChild(description01)
  const skillList01 = document.createElement('ul')
  skillList01.className = 'skill--list'
  prDetailCont01.appendChild(skillList01)
  const tech01a = document.createElement('li')
  tech01a.innerText = data[0]['skills'][0]
  skillList01.appendChild(tech01a)
  const tech01b = document.createElement('li')
  tech01b.innerText = data[0]['skills'][1]
  skillList01.appendChild(tech01b)
  const tech01c = document.createElement('li')
  tech01c.innerText = data[0]['skills'][2]
  skillList01.appendChild(tech01c)
  const prButton01 = document.createElement('button')
  prButton01.className = 'see--project'
  prButton01.innerText = 'See project'
  prDetailCont01.appendChild(prButton01)

  const card02 = document.createElement('div')
  card02.className = 'parent--container'
  workSection.appendChild(card02)
  const prImgCont02 = document.createElement('div')
  prImgCont02.className = 'first--child order-one'
  card02.appendChild(prImgCont02)
  const imgCont02 = document.createElement('a')
  prImgCont02.appendChild(imgCont02)
  const prImg02 = document.createElement('img')
  prImg02.className = 'img-two'
  prImg02.src = data[1]['image']
  prImgCont02.appendChild(prImg02)
  const prDetailCont02 = document.createElement('div')
  prDetailCont02.className = 'second--child order-two'
  card02.appendChild(prDetailCont02)





  
  const card03 = document.createElement('div')
  card03.className = 'parent--container'
  workSection.appendChild(card03)

  const card04 = document.createElement('div')
  card04.className = 'parent--container'
  workSection.appendChild(card04)

}

loadWorkSection(projectsData)


closeIcon.addEventListener('click', menuClose);
hamburger.addEventListener('click', menuOpen);
navLink.addEventListener('click', menuClose);
