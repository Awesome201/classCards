'use strict';

// retrieve the 'card' class from the DOM.
var cardElement = document.getElementById('all-cards');

// this holds all the profiles and any new profiles will also be held in this array.
Profile.allProfiles = [];


// this holds all the properties for each Profile that will be generated. 
function Profile(userName, userAvatar, userHobby, userColor, knownLanguage, interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

function createAboutUsCards() {
  for(var i in Profile.allProfiles) {
    Profile.allProfiles[i].render();
  }
}

// append all these to the container rather than a UL...considering the use of buttons and paragraph and how they are not list items.
Profile.prototype.render = function() {
  var divMain = document.createElement('div');
  divMain.className = 'card';
  cardElement.appendChild(divMain);

  var profileImage = document.createElement('img');
  profileImage.src = this.userAvatar;
  divMain.appendChild(profileImage);

  var divHoldTheCards = document.createElement('div');
  divHoldTheCards.className = 'container';
  divMain.appendChild(divHoldTheCards);

  var userNameElement = document.createElement('h1');
  userNameElement.textContent = this.userName;
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
  buttonElement.textContent = 'Contact Me';
  divHoldTheCards.appendChild(buttonElement);

  var aboutUsDescriptionEl = document.createElement('p');
  aboutUsDescriptionEl.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan diam imperdiet diam laoreet, in dictum sapien blandit.';
  divHoldTheCards.appendChild(aboutUsDescriptionEl);
  
}





// this is a function that when called, will append the appropriate element to the section of the DOM and assign the appropriate userName, img, hobby, knownLanguage and interestedLanguage value to the corresponding element that was just created.

// function createCard(profileObj) {
//   for (var createCard in Profile.allProfiles.length) {

//     // Set the section ID to the section
//     sectionElFlipContainer.setAttribute('id', profileObj.userName + 'li');
//     sectionElFlipContainer.setAttribute('class', 'flipContainer');
//     var sectionElFlipper = document.createElement('li');
//     sectionElFlipper.setAttribute('class', 'flipper');
//     var sectionElFront = document.createElement('li');
//     sectionElFront.setAttribute('class', 'front');
//     var sectionElBack = document.createElement('li');
//     sectionElBack.setAttribute('class', 'back');

//     // Create the h2 element
//     var h2El = document.createElement('h2');

//     // Set its contents to the userName
//     h2El.textContent = profileObj.userName;

//     // appened the h2 to the section
//     sectionElFront.appendChild(h2El);

//     // Create the img elemnt for the avatar
//     var imgEl = document.createElement('img');
//     imgEl.src = profileObj.userAvatar;
//     imgEl.alt = profileObj.userName;
//     sectionElFront.appendChild(imgEl);
//     sectionElFlipper.appendChild(sectionElFront);

//     // add interests
//     // Create the ul to house the interests
//     var ulEl = document.createElement('ul');
//     ulEl.appendChild(buildLiEl('Hobby: ', profileObj.userHobby));
//     ulEl.appendChild(buildLiEl('Color: ', profileObj.userColor));
//     ulEl.appendChild(buildLiEl('Code Known : ', profileObj.knownLanguage));
//     ulEl.appendChild(buildLiEl('Code Interest : ', profileObj.interestedLanguage));
//     sectionElBack.appendChild(ulEl);
//     sectionElFlipper.appendChild(sectionElBack);
//     sectionElFlipContainer.appendChild(sectionElFlipper);
//     return sectionElFlipContainer;
//   }
  
  // create new instances of the Profile object
  new Profile('Zachary', '../img/wizzard.jpg', 'watching anime', '#bada55', 'Java', 'JavaScript');
  new Profile('Suzanne', '../img/rogue.jpg', 'knitting', '#666012', 'CSS', 'JavaScript');
  new Profile('Austin', '../img/cleric.jpg', 'watching movies', '#808080', 'JavaScript', 'Python');
  new Profile('Ramon', '../img/monk.png', 'racing motorsports', '#ff0000', 'JavaScript', 'Python');
  new Profile('Kevin', '../img/fighter.png', 'martial arts', '#008000', 'cSharp', 'JavaScript');
  
  
  // have those new instances display in the about.html
  
  createAboutUsCards();
  
  //how do I make the new Profile object ex: first-card, second-card etc. appear on html?  We used table for salmon so do I make each instance of a card a table?