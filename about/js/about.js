'use strict';

// add the field to each bit of info ex: it should read Favorite Color:   and Language Known:
// STRETCH GOAL add actual link to github when they click the github button.  have the button display  'GitHub: Zachary' add an href that will link it to the actual git hub account.


// retrieve the 'card' class from the DOM.
var cardElement = document.getElementById('all-cards');

// this holds all the profiles
// any new profiles will also be held in this array.
Profile.allProfiles = [];

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
  for(var i in Profile.allProfiles) {
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
Profile.prototype.render = function() {
  var divMain = document.createElement('div');
  divMain.className = 'card';
  cardElement.appendChild(divMain);

  var profileImage = document.createElement('img');
  profileImage.src = this.userAvatar;
  profileImage.className = 'holdsImgs';
  divMain.appendChild(profileImage);

  var divHoldTheCards = document.createElement('div');
  divHoldTheCards.className = 'container';
  divMain.appendChild(divHoldTheCards);

  var userNameElement = document.createElement('h1');
  userNameElement.textContent = this.userName;
  userNameElement.className = 'userNames';
  divHoldTheCards.appendChild(userNameElement);

  var ulEl = document.createElement('ul');
  divHoldTheCards.appendChild(ulEl);

  var hobbyElement = document.createElement('li');
  hobbyElement.textContent = this.userHobby;
  ulEl.appendChild(hobbyElement);

  var userColorElement = document.createElement('li');
  userColorElement.textContent = this.userColor;
  ulEl.appendChild(userColorElement);

  var knownLanguageElement = document.createElement('li');
  knownLanguageElement.textContent = this.knownLanguage;
  ulEl.appendChild(knownLanguageElement);

  var interestedLanguageElement = document.createElement('li');
  interestedLanguageElement.textContent = this.interestedLanguage;
  ulEl.appendChild(interestedLanguageElement);

  var buttonElement = document.createElement('button');
  buttonElement.className = 'contact-me';
  buttonElement.textContent = 'GitHub: ' + this.gitHubLink;
  divHoldTheCards.appendChild(buttonElement);

  var aboutUsDescriptionEl = document.createElement('p');
  aboutUsDescriptionEl.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan diam imperdiet diam laoreet, in dictum sapien blandit.';
  divHoldTheCards.appendChild(aboutUsDescriptionEl);
}

  // new instances of the Profile object constructor
new Profile('Zachary', '../img/wizzard.jpg', 'watching anime', '#bada55', 'Java', 'JavaScript', 'https://github.com/buphnezz');
  new Profile('Suzanne', '../img/rogue.jpg', 'knitting', '#666012', 'CSS', 'JavaScript');
  new Profile('Austin', '../img/cleric.jpg', 'watching movies', '#808080', 'JavaScript', 'Python');
  new Profile('Ramon', '../img/monk.png', 'racing motorsports', '#ff0000', 'JavaScript', 'Python');
  new Profile('Kevin', '../img/fighter.png', 'martial arts', '#008000', 'cSharp', 'JavaScript');
  
  createOnlyOurAboutUsCards();




 