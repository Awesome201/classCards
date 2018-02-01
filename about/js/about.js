'use strict';

//give users notice that our site is best viewed on latest
if (localStorage.getItem('alert') === null){
  alert('Please note that this site is best viewed on the latest version of Chrome.');
  localStorage.setItem('alert', '1');
}

// retrieve the 'card' class from the DOM
var cardElement = document.getElementById('all-cards');

// this holds all the profiles
// any new profiles will also be held in this array
Profile.allProfiles = [];

// dynamically generate the nav based off if the user has visited the site before or not
function checkLocalStorage() {
  if (localStorage.getItem('userName') === null) {
    return;
  } else {

    var navElementLink = document.getElementById('nav-link1');
    var navOlElement = document.getElementById('conditional-nav');
    var navliElement = document.createElement('li');
    var navaElement = document.createElement('a');

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
  for (var i in Profile.allProfiles) {
    Profile.allProfiles[i].render();
  }
}

// this function calls ONLY our 5 cards to be used on our About Us page
function createOnlyOurAboutUsCards() {
  for (var i = 0; i < 5; i++) {
    Profile.allProfiles[i].render();
  }
}

// create DOM elements
// tell the DOM to get each property value from the Profile object constructor in the appropriate element
// attach the element in the appropriate location in the DOM
Profile.prototype.render = function () {
  var divMain = document.createElement('div'); // Flip container
  divMain.className = 'card';
  cardElement.appendChild(divMain);

  var divHoldTheCards = document.createElement('div'); 
  divHoldTheCards.className = 'container';
  divMain.appendChild(divHoldTheCards);

  var divElFlipper = document.createElement('div');
  divElFlipper.className = 'flipper';
  divHoldTheCards.appendChild(divElFlipper);

  var divElFront = document.createElement('div');
  divElFront.className = 'front'; 
  divElFront.style.backgroundColor = this.userColor;
  divElFlipper.appendChild(divElFront);

  var divElBack = document.createElement('div');
  divElBack.className = 'back';
  divElBack.style.backgroundColor = this.userColor;
  divElFlipper.appendChild(divElBack);

  var profileImage = document.createElement('img');
  profileImage.src = this.userAvatar;
  profileImage.className = 'holdsImgs';
  divElFront.appendChild(profileImage);

  var userNameElement = document.createElement('h1');
  userNameElement.textContent = this.userName;
  userNameElement.className = 'userNames';
  divElFront.appendChild(userNameElement);

  var ulEl = document.createElement('ul');
  divElFront.appendChild(ulEl);

  var addPicToProfile = document.createElement('img');
  addPicToProfile.src = this.aboutUsPic;
  addPicToProfile.className = 'holdsProfilePic';
  divElBack.appendChild(addPicToProfile);

  var anchorForGitHubLink = document.createElement('a');
  anchorForGitHubLink.target = '_blank';
  anchorForGitHubLink.href = this.gitHubLink;
  divElBack.appendChild(anchorForGitHubLink);

  var hobbyElement = document.createElement('li');
  hobbyElement.textContent = 'Current Hobby: ' + '\n' + this.userHobby;
  ulEl.appendChild(hobbyElement);

  var knownLanguageElement = document.createElement('li');
  knownLanguageElement.textContent = 'Coding Languages Known: ' + '\n' + this.knownLanguage;
  ulEl.appendChild(knownLanguageElement);

  var interestedLanguageElement = document.createElement('li');
  interestedLanguageElement.textContent = 'Coding Language Interests: ' + '\n' + this.interestedLanguage;
  ulEl.appendChild(interestedLanguageElement);

  var buttonElement = document.createElement('button');
  buttonElement.className = 'contact-me';
  buttonElement.textContent = 'GitHub: ' + this.userName;
  anchorForGitHubLink.appendChild(buttonElement);

  var aboutUsDescriptionEl = document.createElement('p');
  aboutUsDescriptionEl.textContent = this.aboutUsProfile;
  divElBack.appendChild(aboutUsDescriptionEl);
};

// new instances of the Profile object constructor
new Profile('Zachary', '../img/wizzard.png', 'watching anime', '#42ebf4', 'Java, CSS, HTML and JavaScript', 'C# and Python', '../img/zach.jpg', 'https://github.com/buphnezz', 'I’ve always enjoyed problem solving, tinkering and making things better!  Growing up I loved playing with my Teenage Mutant Ninja Turtles.  Whenever a toy broke, I would rebuild or upgrade the toy using spare parts or items around the house.  Through software development, I’ve reconnected with that part of my life.');
new Profile('Suzanne', '../img/rogue.png', 'knitting', '#FFAC40', 'CSS, HTML, and JavaScript', 'C# and Python', '../img/sooz.png', 'https://github.com/FavoredFortune', 'As a software developer I’m keen to make people’s lives easier. Combining my development skills with my history as a strategic, integrated marketer, allows me to offer organizations great experience driving results through team collaboration. In my spare time you can find me bird watching, knitting, or acting as @apartment_cats press agent on Instagram.');
new Profile('Austin', '../img/fighter.png', 'watching movies', '#808080', 'CSS, HTML, and  JavaScript', 'Python', '../img/austin.jpg', 'https://github.com/austincmatteson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosq.');
new Profile('Ramon', '../img/monk.png', 'racing motorsports', '#ff0000', 'CSS, HTML, and JavaScript', 'Python', '../img/ramon.jpg', 'https://github.com/brickfaced', 'Cars, computers and video games have always been a part my life. Coding has only been my interest for a very small fraction of that time, but I enjoy it as much as the rest. As a software developer my goal is to work in my four wonders of the world.');
new Profile('Kevin', '../img/fighter.png', 'martial arts', '#008000', 'cSharp, CSS, HTML, and JavaScript', 'JavaScript', '../img/kevin.jpg', 'https://github.com/knyghtLyght', 'An experienced leader and support specialist with a technology background and a passion for coordination, efficiency, and leveraging technology to create better outcomes.Passionate about storytelling and interactive media as the next great storytelling medium.');

createOnlyOurAboutUsCards();
checkLocalStorage();