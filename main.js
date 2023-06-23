/* eslint-disable prefer-destructuring */
/* Mobile Menu */
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

/* Load Works Section */

const projectsData = [
  {
    title: 'Tonic',
    year: '2015',
    clientname: 'CANOPY',
    role: 'Back End Dev',
    desktopDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    desktopskills: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    image: 'images/2nd pic.svg',
    link: 'https://github.com/Ayokunnumi1',
    github: 'https://github.com/Ayokunnumi1/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Multi-Post Stories',
    year: '2015',
    clientname: 'CANOPY',
    role: 'Back End Dev',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/22nd pic.svg',
    link: 'https://github.com/Ayokunnumi1',
    github: 'https://github.com/Ayokunnumi1/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Multi-Post Stories',
    year: '2015',
    clientname: 'CANOPY',
    role: 'Back End Dev',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/3rd pic.svg',
    link: 'https://github.com/Ayokunnumi1',
    github: 'https://github.com/Ayokunnumi1/Portfolio-setup-and-mobile-first',
  },
  {
    title: 'Multi-Post Stories',
    year: '2015',
    clientname: 'CANOPY',
    role: 'Back End Dev',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/2nd Desktop2 pic.svg',
    link: 'https://github.com/Ayokunnumi1',
    github: 'https://github.com/Ayokunnumi1/Portfolio-setup-and-mobile-first',
  },
];

const loadWorkSection = (data) => {
  const card01 = document.createElement('div');
  card01.className = 'parent--container parent--one';
  workSection.appendChild(card01);
  const prImgCont01 = document.createElement('div');
  prImgCont01.className = 'first--child first-desktop-pic';
  card01.appendChild(prImgCont01);
  const imgCont01 = document.createElement('a');
  prImgCont01.appendChild(imgCont01);
  const prImg01 = document.createElement('img');
  prImg01.className = 'img';
  prImg01.src = data[0].image;
  prImgCont01.appendChild(prImg01);
  const prDetailCont01 = document.createElement('div');
  prDetailCont01.className = 'second--child';
  card01.appendChild(prDetailCont01);
  const prTitle01 = document.createElement('h2');
  prTitle01.innerText = data[0].title;
  prDetailCont01.appendChild(prTitle01);
  const infoList01 = document.createElement('ul');
  infoList01.className = 'ul--list';
  prDetailCont01.appendChild(infoList01);
  const clientname01 = document.createElement('li');
  clientname01.innerText = data[0].clientname;
  infoList01.appendChild(clientname01);
  const role01 = document.createElement('li');
  role01.innerText = data[0].role;
  infoList01.appendChild(role01);
  const year01 = document.createElement('li');
  year01.innerText = data[0].year;
  infoList01.appendChild(year01);
  const description01 = document.createElement('p');
  description01.innerText = data[0].description;
  prDetailCont01.appendChild(description01);
  const skillList01 = document.createElement('ul');
  skillList01.className = 'skill--list';
  prDetailCont01.appendChild(skillList01);
  const tech01a = document.createElement('li');
  // eslint-disable-next-line prefer-destructuring
  tech01a.innerText = data[0].skills[0];
  skillList01.appendChild(tech01a);
  const tech01b = document.createElement('li');
  // eslint-disable-next-line prefer-destructuring
  tech01b.innerText = data[0].skills[1];
  skillList01.appendChild(tech01b);
  const tech01c = document.createElement('li');
  tech01c.innerText = data[0].skills[2];
  skillList01.appendChild(tech01c);
  const prButton01 = document.createElement('button');
  prButton01.className = 'see--project';
  prButton01.innerText = 'See project';
  prDetailCont01.appendChild(prButton01);

  const card02 = document.createElement('div');
  card02.className = 'parent--container';
  workSection.appendChild(card02);
  const prImgCont02 = document.createElement('div');
  prImgCont02.className = 'first--child order-one';
  card02.appendChild(prImgCont02);
  const imgCont02 = document.createElement('a');
  prImgCont02.appendChild(imgCont02);
  const prImg02 = document.createElement('img');
  prImg02.className = 'img-two';
  prImg02.src = data[1].image;
  prImgCont02.appendChild(prImg02);
  const prDetailCont02 = document.createElement('div');
  prDetailCont02.className = 'second--child order-two';
  card02.appendChild(prDetailCont02);
  const prTitle02 = document.createElement('h2');
  prTitle02.innerText = data[1].title;
  prDetailCont02.appendChild(prTitle02);
  const infoList02 = document.createElement('ul');
  infoList02.className = 'ul--list';
  prDetailCont02.appendChild(infoList02);
  const clientname02 = document.createElement('li');
  clientname02.innerText = data[1].clientname;
  infoList02.appendChild(clientname02);
  const role02 = document.createElement('li');
  role02.innerText = data[1].role;
  infoList02.appendChild(role02);
  const year02 = document.createElement('li');
  year02.innerText = data[1].year;
  infoList02.appendChild(year02);
  const description02 = document.createElement('p');
  description02.innerText = data[1].description;
  prDetailCont02.appendChild(description02);
  const skillList02 = document.createElement('ul');
  skillList02.className = 'skill--list';
  prDetailCont02.appendChild(skillList02);
  const tech02a = document.createElement('li');
  tech02a.innerText = data[1].skills[0];
  skillList02.appendChild(tech02a);
  const tech02b = document.createElement('li');
  tech02b.innerText = data[1].skills[1];
  skillList02.appendChild(tech02b);
  const tech02c = document.createElement('li');
  tech02c.innerText = data[1].skills[2];
  skillList02.appendChild(tech02c);
  const prButton02 = document.createElement('button');
  prButton02.className = 'see--project';
  prButton02.innerText = 'See project';
  prDetailCont02.appendChild(prButton02);

  const card03 = document.createElement('div');
  card03.className = 'parent--container';
  workSection.appendChild(card03);
  const prImgCont03 = document.createElement('div');
  prImgCont03.className = 'first--child';
  card03.appendChild(prImgCont03);
  const imgCont03 = document.createElement('a');
  prImgCont03.appendChild(imgCont03);
  const prImg03 = document.createElement('img');
  prImg03.className = 'img-three';
  prImg03.src = data[2].image;
  prImgCont03.appendChild(prImg03);
  const prDetailCont03 = document.createElement('div');
  prDetailCont03.className = 'second--child';
  card03.appendChild(prDetailCont03);
  const prTitle03 = document.createElement('h2');
  prTitle03.innerText = data[2].title;
  prDetailCont03.appendChild(prTitle03);
  const infoList03 = document.createElement('ul');
  infoList03.className = 'ul--list';
  prDetailCont03.appendChild(infoList03);
  const clientname03 = document.createElement('li');
  clientname03.innerText = data[2].clientname;
  infoList03.appendChild(clientname02);
  const role03 = document.createElement('li');
  role03.innerText = data[2].role;
  infoList03.appendChild(role03);
  const year03 = document.createElement('li');
  year03.innerText = data[2].year;
  infoList03.appendChild(year03);
  const description03 = document.createElement('p');
  description03.innerText = data[2].description;
  prDetailCont03.appendChild(description03);
  const skillList03 = document.createElement('ul');
  skillList03.className = 'skill--list';
  prDetailCont03.appendChild(skillList03);
  const tech03a = document.createElement('li');
  tech03a.innerText = data[2].skills[0];
  skillList03.appendChild(tech03a);
  const tech03b = document.createElement('li');
  tech03b.innerText = data[2].skills[1];
  skillList03.appendChild(tech03b);
  const tech03c = document.createElement('li');
  tech03c.innerText = data[2].skills[2];
  skillList03.appendChild(tech03c);
  const prButton03 = document.createElement('button');
  prButton03.className = 'see--project';
  prButton03.innerText = 'See project';
  prDetailCont03.appendChild(prButton03);

  const card04 = document.createElement('div');
  card04.className = 'parent--container';
  workSection.appendChild(card04);
  const prImgCont04 = document.createElement('div');
  prImgCont04.className = 'first--child order-one';
  card04.appendChild(prImgCont04);
  const imgCont04 = document.createElement('a');
  prImgCont04.appendChild(imgCont04);
  const prImg04 = document.createElement('img');
  prImg04.className = 'img-four';
  prImg04.src = data[3].image;
  prImgCont04.appendChild(prImg04);
  const prDetailCont04 = document.createElement('div');
  prDetailCont04.className = 'second--container order-two';
  card04.appendChild(prDetailCont04);
  const prTitle04 = document.createElement('h2');
  prTitle04.innerText = data[3].title;
  prDetailCont04.appendChild(prTitle04);
  const infoList04 = document.createElement('ul');
  infoList04.className = 'ul--list';
  prDetailCont04.appendChild(infoList04);
  const clientname04 = document.createElement('li');
  clientname04.innerText = data[3].clientname;
  infoList04.appendChild(clientname04);
  const role04 = document.createElement('li');
  role04.innerText = data[3].role;
  infoList04.appendChild(role04);
  const year04 = document.createElement('li');
  year04.innerText = data[3].year;
  infoList04.appendChild(year04);
  const description04 = document.createElement('p');
  description04.innerText = data[3].description;
  prDetailCont04.appendChild(description04);
  const skillList04 = document.createElement('ul');
  skillList04.className = 'skill--list';
  prDetailCont04.appendChild(skillList04);
  const tech04a = document.createElement('li');
  tech04a.innerText = data[3].skills[0];
  skillList04.appendChild(tech03a);
  const tech04b = document.createElement('li');
  tech04b.innerText = data[3].skills[1];
  skillList04.appendChild(tech04b);
  const tech04c = document.createElement('li');
  tech04c.innerText = data[3].skills[2];
  skillList04.appendChild(tech04c);
  const prButton04 = document.createElement('button');
  prButton04.className = 'see--project';
  prButton04.innerText = 'See project';
  prDetailCont04.appendChild(prButton04);
  const popUpWindow = document.querySelector('#modal');

  const closePopUp = () => {
    popUpWindow.style.display = 'none';
    const popUpContainer = document.querySelector('.overlay');
    popUpContainer.parentElement.removeChild(popUpContainer);
    body.style = '';
  };

  const openPopUp = (data) => {
    popUpWindow.style.display = 'block';
    body.style = 'overflow: hidden;';
    const popUpContainer = document.createElement('div');
    popUpContainer.className = 'overlay';
    popUpWindow.appendChild(popUpContainer);

    const popUpHeader = document.createElement('div');
    popUpHeader.className = 'head';
    popUpContainer.appendChild(popUpHeader);
    const popUpTitle = document.createElement('h2');
    popUpTitle.className = 'project-heading';
    popUpTitle.innerText = data[0].title;
    popUpHeader.appendChild(popUpTitle);
    const popUpCloseIcon = document.createElement('img');
    popUpCloseIcon.className = 'pop-up-close-icon';
    popUpCloseIcon.src = 'images/pop-up-close-icon.png';
    popUpHeader.appendChild(popUpCloseIcon);

    const popUpInfoCont = document.createElement('div');
    popUpInfoCont.className = 'project-description';
    popUpContainer.appendChild(popUpInfoCont);
    const popUpInfoList = document.createElement('ul');
    popUpInfoList.className = 'experience-list';
    popUpInfoCont.appendChild(popUpInfoList);
    const popUpClient = document.createElement('li');
    popUpClient.innerText = data[0].clientname;
    popUpInfoList.appendChild(popUpClient);
    const popUpRole = document.createElement('li');
    popUpRole.innerText = data[0].role;
    popUpInfoList.appendChild(popUpRole);
    const popUpYear = document.createElement('li');
    popUpYear.innerText = data[0].year;
    popUpInfoList.appendChild(popUpYear);
    const popUpImgDesk = document.createElement('div');
    popUpImgDesk.className = 'detail-img-desk';
    popUpInfoCont.appendChild(popUpImgDesk);
    const popUpImg = document.createElement('div');
    popUpImg.className = 'detail-img';
    popUpInfoCont.appendChild(popUpImg);

    const popUpDescCont = document.createElement('div');
    popUpDescCont.className = 'flex-pop';
    popUpContainer.appendChild(popUpDescCont);
    const popUpDescDesk = document.createElement('p');
    popUpDescDesk.className = 'pop-up-desc-desk';
    popUpDescDesk.innerText = data[0].desktopDescription;
    popUpDescCont.appendChild(popUpDescDesk);
    const popUpDesc = document.createElement('p');
    popUpDesc.className = 'pop-up-desc';
    popUpDesc.innerText = data[0].description;
    popUpDescCont.appendChild(popUpDesc);
    const popUpListButton = document.createElement('div');
    popUpListButton.className = 'side-pop';
    popUpDescCont.appendChild(popUpListButton);
    const popUpSkillListDesk = document.createElement('ul');
    popUpSkillListDesk.className = 'skill-list-desktop';
    popUpListButton.appendChild(popUpSkillListDesk);
    const desktopSkill01 = document.createElement('li');
    desktopSkill01.innerText = data[0].desktopskills[0];
    popUpSkillListDesk.appendChild(desktopSkill01);
    const desktopSkill02 = document.createElement('li');
    desktopSkill02.innerText = data[0].desktopskills[1];
    popUpSkillListDesk.appendChild(desktopSkill02);
    const desktopSkill03 = document.createElement('li');
    desktopSkill03.innerText = data[0].desktopskills[2];
    popUpSkillListDesk.appendChild(desktopSkill03);
    const desktopSkill04 = document.createElement('li');
    desktopSkill04.innerText = data[0].desktopskills[3];
    popUpSkillListDesk.appendChild(desktopSkill04);
    const desktopSkill05 = document.createElement('li');
    desktopSkill05.innerText = data[0].desktopskills[4];
    popUpSkillListDesk.appendChild(desktopSkill05);
    const popUpSkillList = document.createElement('ul');
    popUpSkillList.className = 'skill-list';
    popUpListButton.appendChild(popUpSkillList);
    const popUpSkill01 = document.createElement('li');
    popUpSkill01.innerText = data[0].skills[0];
    popUpSkillList.appendChild(popUpSkill01);
    const popUpSkill02 = document.createElement('li');
    popUpSkill02.innerText = data[0].skills[1];
    popUpSkillList.appendChild(popUpSkill02);
    const popUpSkill03 = document.createElement('li');
    popUpSkill03.innerText = data[0].skills[2];
    popUpSkillList.appendChild(popUpSkill03);
    const popUpButtonCont = document.createElement('div');
    popUpButtonCont.className = 'see-container';
    popUpListButton.appendChild(popUpButtonCont);
    const seeButtonLink = document.createElement('a');
    popUpButtonCont.appendChild(seeButtonLink);
    const seeButton = document.createElement('button');
    seeButtonLink.appendChild(seeButton);
    const seeBtnTxt = document.createElement('span');
    seeBtnTxt.innerText = 'see live';
    seeButton.appendChild(seeBtnTxt);
    const seeBtnIcon = document.createElement('img');
    seeBtnIcon.src = 'images/live-link-png.svg';
    seeButton.appendChild(seeBtnIcon);
    const sourceButtonLink = document.createElement('a');
    popUpButtonCont.appendChild(sourceButtonLink);
    const sourceButton = document.createElement('button');
    sourceButtonLink.appendChild(sourceButton);
    const sourceBtnTxt = document.createElement('span');
    sourceBtnTxt.innerText = 'see source';
    sourceButton.appendChild(sourceBtnTxt);
    const sourceBtnIcon = document.createElement('img');
    sourceBtnIcon.src = 'images/github-icon-png.png';
    sourceBtnIcon.className = 'github-img'
    sourceButton.appendChild(sourceBtnIcon);
    popUpCloseIcon.addEventListener('click', closePopUp);
  };

  prButton01.addEventListener('click', () => { openPopUp(projectsData); });
  prButton02.addEventListener('click', () => { openPopUp(projectsData); });
  prButton03.addEventListener('click', () => { openPopUp(projectsData); });
  prButton04.addEventListener('click', () => { openPopUp(projectsData); });
};

loadWorkSection(projectsData);

/* Pop Up */

closeIcon.addEventListener('click', menuClose);
hamburger.addEventListener('click', menuOpen);
navLink.addEventListener('click', menuClose);
