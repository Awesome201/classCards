'use strict';

// declare global variables
var mainEl = document.getElementById('content');

// Add obj array
var matchArray = [];
var missMatchArray = [];
var newUserProfiles;
Profile.allProfiles = [];

// Profile obj constructor
function Profile(userName,userAvatar,userHobby,userColor,knownLanguage, interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

// local storage test array
function localStorageTestArray () {
  new Profile('test', '../img/fighter.png', 'martial arts', 'green', 'java', 'javascript');
  localStorage.profiles = JSON.stringify(Profile.allProfiles);
}

// Local storage check
function localStorageHandler () {
  newUserProfiles = JSON.parse(localStorage.profiles);
}

// create test instance of objects
function builtInProfiles () {
  new Profile('Kevin', '../img/rogue.jpg', 'martial arts', 'green', 'cSharp', 'javascript');
  new Profile('Ramone', '../img/druid.jpg', 'martial arts', 'green', 'cSharp', 'javascript');
  new Profile('Zach', '../img/monk.png', 'martial arts', 'green', 'java', 'javascript');
}

// Li builder
function buildLiEl (promptValue, displayValue) {
  var liEl = document.createElement('li');
  liEl.textContent = promptValue + displayValue;
  return liEl;
}

// Find matches
function matchFinder (object, compareArray) {
  var matchNumber = 0;
  for (var i in compareArray) {
    if (object.userColor === compareArray[i].userColor) {
      matchNumber++;
    }
    if (object.userHobby === compareArray[i].userHobby) {
      matchNumber++;
    }
    if (object.knownLanguage === compareArray[i].knownLanguage) {
      matchNumber++;
    }
    if (object.interestedLanguage === compareArray[i].interestedLanguage) {
      matchNumber++;
    }
    console.log(matchNumber);
    // Object literal to hold the index of the object in allProfiles and the number of matches
    var matchAndNumber = {
      id: i,
      matches: matchNumber
    };
    if (matchNumber >= 3) {
      matchArray.push(matchAndNumber);
    } else {
      missMatchArray.push(matchAndNumber);
    }
    matchNumber = 0;
  }
}


// Create and appened card
function createCard (profileObj) {
  var divElFlipContainer = document.createElement('div'); // Create the div that houses the card
  divElFlipContainer.setAttribute('id', profileObj.userName + 'div'); // Set the div ID to the
  divElFlipContainer.setAttribute('class', 'flipContainer');
  var divElFlipper = document.createElement('div');
  divElFlipper.setAttribute('class', 'flipper');
  var divElFront = document.createElement('div');
  divElFront.setAttribute('class', 'front');
  var divElBack = document.createElement('div');
  divElBack.setAttribute('class', 'back');
  var h2El = document.createElement('h2'); // Create the h2 element
  h2El.textContent = profileObj.userName; // Set its contents to the userName
  divElFront.appendChild(h2El); // appened the h2 to the div
  var imgEl = document.createElement('img'); // Create the img elemnt fot he avatar
  imgEl.src = profileObj.userAvatar;
  imgEl.alt = profileObj.userName;
  divElFront.appendChild(imgEl);
  divElFlipper.appendChild(divElFront);
  // add interests
  var ulEl = document.createElement('ul'); // Create the ul to house the interests
  ulEl.appendChild(buildLiEl('Hobby: ', profileObj.userHobby));
  ulEl.appendChild(buildLiEl('Color: ', profileObj.userColor));
  ulEl.appendChild(buildLiEl('Code Known : ', profileObj.knownLanguage));
  ulEl.appendChild(buildLiEl('Code Interest : ', profileObj.interestedLanguage));
  divElBack.appendChild(ulEl);
  divElFlipper.appendChild(divElBack);
  divElFlipContainer.appendChild(divElFlipper);
  return divElFlipContainer;
}

//Display the matching cards
function updateDisplay (matchArray) {
  for (var i in matchArray) {
    mainEl.appendChild(createCard(Profile.allProfiles[matchArray[i].id]));
  }
}

localStorageTestArray();
localStorageHandler();
builtInProfiles();
matchFinder(newUserProfiles[0], Profile.allProfiles);
updateDisplay(matchArray);