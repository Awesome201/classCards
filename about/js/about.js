'use strict';

//give users notice that our site is best viewed on latest
if (localStorage.getItem('alert') === null){
  alert('Please note that this site is best viewed on the latest version of Chrome.');
  localStorage.setItem('alert', '1');
}

// retrieve the 'card' class from the DOM
let cardElement = document.getElementById('all-cards');

// this holds all the profiles
// any new profiles will also be held in this array
Profile.allProfiles = [];

// dynamically generate the nav based off if the user has visited the site before or not
function checkLocalStorage() {
  if (localStorage.getItem('userName') === null) {
    return;
  } else {

    let navElementLink = document.getElementById('nav-link1');
    let navOlElement = document.getElementById('conditional-nav');
    let navliElement = document.createElement('li');
    let navaElement = document.createElement('a');

    navliElement.id = 'nav-link';
    navaElement.textContent = 'Edit Your Profile';
    navaElement.href = '../profile/profile.html';
    navliElement.appendChild(navaElement);
    navOlElement.appendChild(navliElement);
    navliElement.after(navElementLink);

    navliElement = document.createElement('li');
    navaElement = document.createElement('a');
    navliElement.id = 'nav-link';
    navaElement.textContent = 'See Your Class Cards';
    navaElement.href = '../results/results.html';
    navliElement.appendChild(navaElement);
    navOlElement.appendChild(navliElement);
    navliElement.after(navElementLink);
  }
}

// this holds all the properties for each Profile that will be generated
function Profile(userName, userAvatar, userHobby, userColor, knownLanguage, interestedLanguage, aboutUsPic, gitHubLink, aboutUsProfile) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.gitHubLink = gitHubLink;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  this.aboutUsProfile = aboutUsProfile;
  this.aboutUsPic = aboutUsPic;
  Profile.allProfiles.push(this);
}

// this function will call ALL cards that have been created and are stored in our Profile.allProfiles array
function createAllCards() {
  for (let i in Profile.allProfiles) {
    Profile.allProfiles[i].render();
  }
}

// this function calls ONLY our 5 cards to be used on our About Us page
function createOnlyOurAboutUsCards() {
  for (let i = 0; i < 5; i++) {
    Profile.allProfiles[i].render();
  }
}

// create DOM elements
// tell the DOM to get each property value from the Profile object constructor in the appropriate element
// attach the element in the appropriate location in the DOM
Profile.prototype.render = function () {
  let divMain = document.createElement('div'); // Flip container
  divMain.className = 'card';
  cardElement.appendChild(divMain);

  let divHoldTheCards = document.createElement('div'); 
  divHoldTheCards.className = 'container';
  divMain.appendChild(divHoldTheCards);

  let divElFlipper = document.createElement('div');
  divElFlipper.className = 'flipper';
  divHoldTheCards.appendChild(divElFlipper);

  let divElFront = document.createElement('div');
  divElFront.className = 'front'; 
  divElFront.style.backgroundColor = this.userColor;
  divElFlipper.appendChild(divElFront);

  let divElBack = document.createElement('div');
  divElBack.className = 'back';
  divElBack.style.backgroundColor = this.userColor;
  divElFlipper.appendChild(divElBack);

  let userNameElement = document.createElement('h1');
  userNameElement.textContent = this.userName;
  userNameElement.className = 'userNames';
  divElFront.appendChild(userNameElement);

  let profileImage = document.createElement('img');
  profileImage.id = 'profile-img';
  profileImage.src = this.userAvatar;
  profileImage.className = 'holdsImgs';
  divElFront.appendChild(profileImage);

  let ulEl = document.createElement('ul');
  divElFront.appendChild(ulEl);

  let addPicToProfile = document.createElement('img');
  addPicToProfile.id = 'profile-pic';
  addPicToProfile.src = this.aboutUsPic;
  addPicToProfile.className = 'holdsProfilePic';
  divElBack.appendChild(addPicToProfile);

  let anchorForGitHubLink = document.createElement('a');
  anchorForGitHubLink.target = '_blank';
  anchorForGitHubLink.href = this.gitHubLink;
  divElBack.appendChild(anchorForGitHubLink);

  let hobbyElement = document.createElement('li');
  hobbyElement.textContent = 'Current Hobby: ' + '\n' + this.userHobby;
  ulEl.appendChild(hobbyElement);

  let knownLanguageElement = document.createElement('li');
  knownLanguageElement.textContent = 'Coding Languages Known: ' + '\n' + this.knownLanguage;
  ulEl.appendChild(knownLanguageElement);

  let interestedLanguageElement = document.createElement('li');
  interestedLanguageElement.id = 'last-lang';
  interestedLanguageElement.textContent = 'Coding Language Interests: ' + '\n' + this.interestedLanguage;
  ulEl.appendChild(interestedLanguageElement);

  let buttonElement = document.createElement('button');
  buttonElement.className = 'contact-me';
  buttonElement.textContent = 'GitHub: ' + this.userName;
  anchorForGitHubLink.appendChild(buttonElement);

  let aboutUsDescriptionEl = document.createElement('p');
  aboutUsDescriptionEl.textContent = this.aboutUsProfile;
  divElBack.appendChild(aboutUsDescriptionEl);
};

// new instances of the Profile object constructor
new Profile('Zachary', '../img/wizzard.png', 'watching anime', '#42ebf4', 'Java, CSS, HTML and JavaScript', 'C# and Python', '../img/zach.jpg', 'https://github.com/buphnezz', 'As a prolific gamer I’ve spent my life learning code on my own, user testing and training others.  Through that, I found a passion for making other people’s lives better and solving problems in inventive ways.  I want to be a developer to change the lives of those around me.');
new Profile('Suzanne', '../img/rogue.png', 'knitting', '#FFAC40', 'CSS, HTML, and JavaScript', 'C# and Python', '../img/sooz.png', 'https://github.com/FavoredFortune', 'As a software developer I’m keen to make people’s lives easier. Combining my development skills with my history as a strategic, integrated marketer, allows me to offer organizations great experience driving results through team collaboration. In my spare time you can find me bird watching, knitting, or with my cats.');
new Profile('Austin', '../img/fighter.png', 'watching movies', '#808080', 'CSS, HTML, and  JavaScript', 'Python', '../img/austin.jpg', 'https://github.com/austincmatteson', 'Hailing from the Emerald City of Angels that Never Sleeps, I\'m excited to bring the perspectives of three corners of the US together in the software development space. I bring an eclectic nature, from hipster music tastes, to foreign films, to even tarot cards. And if you have a pet, we\'re best friends now.');
new Profile('Ramon', '../img/monk.png', 'racing motorsports', '#ff0000', 'CSS, HTML, and JavaScript', 'Python', '../img/ramon.jpeg', 'https://github.com/brickfaced', 'Cars, computers and video games have always been a part my life. Coding has only been my interest for a very small fraction of that time, but I enjoy it as much as the rest. As a software developer my goal is to work in my four wonders of the world.');
new Profile('Kevin', '../img/fighter.png', 'martial arts', '#008000', 'cSharp, CSS, HTML, and JavaScript', 'JavaScript', '../img/kevin.jpg', 'https://github.com/knyghtLyght', 'An experienced leader and support specialist with a technology background and a passion for coordination, efficiency, and leveraging technology to create better outcomes.Passionate about storytelling and interactive media as the next great storytelling medium.');

createOnlyOurAboutUsCards();
checkLocalStorage();