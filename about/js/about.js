'use strict';

// add the field to each bit of info ex: it should read Favorite Color:   and Language Known:
// DRY out my elements below using the element.SetAttribute = 'blah', blah;

// retrieve the 'card' class from the DOM.
var cardElement = document.getElementById('all-cards');

// this holds all the profiles
// any new profiles will also be held in this array.
Profile.allProfiles = [];

// dynamically generate the nav based off if the user has visited the site before or not.
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

// this holds all the properties for each Profile that will be generated. 
function Profile(userName, userAvatar, userHobby, userColor, knownLanguage, interestedLanguage, gitHubLink) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.gitHubLink = gitHubLink;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

// this function will call ALL cards that have been created and are stored in our Profile.allProfiles array.
function createAllCards() {
  for (var i in Profile.allProfiles) {
    Profile.allProfiles[i].render();
  }
}

// this function calls ONLY our 5 cards to be used on our About Us page.
function createOnlyOurAboutUsCards() {
  for (var i = 0; i < 5; i++) {
    Profile.allProfiles[i].render();
  }
}

// create Html elements 
// tell the Html to get each property value from the Profile object constructor in the appropriate element
// attach the element in the appropriate location in the Html.
Profile.prototype.render = function () {
  var divMain = document.createElement('div'); // Flip container
  divMain.className = 'card';
  cardElement.appendChild(divMain);
  
  var divHoldTheCards = document.createElement('div'); 
  divHoldTheCards.className = 'container';
  divMain.appendChild(divHoldTheCards);
  
  var divElFlipper = document.createElement('div');
  divElFlipper.className = 'flipper';
  divElFlipper.style.backgroundColor = this.userColor;
  divHoldTheCards.appendChild(divElFlipper);

  var divElFront = document.createElement('div');
  divElFront.className = 'front';   
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

  // var ulEl = document.createElement('ul');
  // divHoldTheCards.appendChild(ulEl);
  
  
  var anchorForGitHubLink = document.createElement('a');
  anchorForGitHubLink.target = '_blank';
  anchorForGitHubLink.href = this.gitHubLink;
  divElBack.appendChild(anchorForGitHubLink);

  var hobbyElement = document.createElement('li');
  hobbyElement.textContent = 'Current Hobby: ' + this.userHobby;
  divElFront.appendChild(hobbyElement);

  var knownLanguageElement = document.createElement('li');
  knownLanguageElement.textContent = 'Coding Languages Known: ' + this.knownLanguage;
  divElFront.appendChild(knownLanguageElement);

  var interestedLanguageElement = document.createElement('li');
  interestedLanguageElement.textContent = 'Coding Language Interests: ' + this.interestedLanguage;
  divElFront.appendChild(interestedLanguageElement);

  var buttonElement = document.createElement('button');
  buttonElement.className = 'contact-me';
  buttonElement.textContent = 'GitHub: ' + this.userName;
  anchorForGitHubLink.appendChild(buttonElement);

  var aboutUsDescriptionEl = document.createElement('p');
  aboutUsDescriptionEl.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan diam imperdiet diam laoreet, in dictum sapien blandit.';
  divElBack.appendChild(aboutUsDescriptionEl);
}

// new instances of the Profile object constructor
new Profile('Zachary', '../img/wizzard.jpg', 'watching anime', '#bada55', 'Java', 'JavaScript', 'https://github.com/buphnezz');
new Profile('Suzanne', '../img/rogue.jpg', 'knitting', '#338FCC', 'CSS', 'JavaScript', 'https://github.com/FavoredFortune');
new Profile('Austin', '../img/cleric.jpg', 'watching movies', '#808080', 'JavaScript', 'Python', 'https://github.com/austincmatteson');
new Profile('Ramon', '../img/monk.png', 'racing motorsports', '#ff0000', 'JavaScript', 'Python', 'https://github.com/brickfaced');
new Profile('Kevin', '../img/fighter.png', 'martial arts', '#008000', 'cSharp', 'JavaScript', 'https://github.com/knyghtLyght');

createOnlyOurAboutUsCards();
checkLocalStorage();