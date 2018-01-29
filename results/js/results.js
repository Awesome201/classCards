'use strict';

// declare global variables 
var mainEl = document.getElementById('content');
// Add obj array
var matchArray = [];
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

// create test instance of objects
new Profile('kevin', '../img/250px-280Ralts.png', 'martial arts', 'green', 'cSharp', 'javascript');
new Profile('Ramone', 'rogue', 'martial arts', 'green', 'cSharp', 'javascript');
new Profile('Zach', 'rogue', 'martial arts', 'green', 'cSharp', 'javascript');

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
  }
  for (var j in compareArray) {
    if (object.userHobby === compareArray[j].userHobby) {
      matchNumber++;
    }
  }
  for (var k in compareArray) {
    if (object.knownLanguage === compareArray[k].knownLanguage) {
      matchNumber++;
    }
  }
  for (var l in compareArray) {
    if (object.interestedLanguage === compareArray[l].interestedLanguage) {
      matchNumber++;
    }
  }
  var matchAndNumber = {
    id: i,
    matches: matchNumber
  };
  matchArray.push(matchAndNumber);
}
// Create and appened card
function createCard (profileObj) {
  var divEl = document.createElement('div'); // Create the div that houses the card
  divEl.setAttribute('id', profileObj.userName + 'div'); // Set the div ID to userNmaediv
  var h2El = document.createElement('h2'); // Create the h2 element 
  h2El.textContent = profileObj.userName; // Set its contents to the userName
  divEl.appendChild(h2El); // appened the h2 to the div
  var imgEl = document.createElement('img'); // Create the img elemnt fot he avatar
  imgEl.src = profileObj.userAvatar;
  imgEl.alt = profileObj.userName;
  divEl.appendChild(imgEl);
  // add interests
  var ulEl = document.createElement('ul'); // Create the ul to house the interests
  ulEl.appendChild(buildLiEl('Hobby: ', profileObj.userHobby));
  ulEl.appendChild(buildLiEl('Color: ', profileObj.userColor));
  ulEl.appendChild(buildLiEl('Code Known : ', profileObj.knownLanguage));
  ulEl.appendChild(buildLiEl('Code Interest : ', profileObj.interestedLanguage));
  divEl.appendChild(ulEl);
  return divEl;
}
mainEl.appendChild(createCard(Profile.allProfiles[0]));