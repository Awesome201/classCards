'use strict';

if (localStorage.getItem('userName') === null) {
  alert('Not logged in, redirecting to home page.');
  window.location = '../index.html';
}

// declare global variables
var mainEl = document.getElementById('content');
var headerEl = document.getElementById('userCard');
var sectionEl = document.getElementById('misMatchSection');

// Add obj array
var matchArray = [];
var missMatchArray = [];
var newUserProfiles;
Profile.allProfiles = [];

// Test variables
var knownArray = ['JavaScript', 'HTML', 'CSS'];
var interestArray = ['Python', 'C#'];

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

// Local storage check
function localStorageHandler () {
  newUserProfiles = JSON.parse(localStorage.newUserName);
}

// create test instance of objects
function builtInProfiles () {
  new Profile('Kevin', '../img/monk.png', 'martial arts', '1F6212', knownArray, interestArray);
  new Profile('Austin', '../img/fighter.png', 'watching movies', '404040', ['Javascript', 'HTML', 'CSS'], ['Python', 'Ruby']);
  new Profile('Zach', '../img/wizzard.png', 'Anime', '49F3FF', ['Javascript', 'HTML', 'CSS'], ['Python', 'C#']);
  new Profile('Ramon', '../img/monk.png', 'Racing motorsports', 'FF0000', ['Javascript', 'HTML', 'CSS'], ['Python']);
  new Profile('Sooz', '../img/rogue.png', 'Knitting', 'FF8C00', ['Javascript', 'HTML', 'CSS'], ['Python', 'C#']);
  new Profile('Kris', '../img/rogue.png', 'reading', 'B51A1F', ['Javascript', 'Python'], ['Java']);
  new Profile('Judah', '../img/druid.jpg', 'Cooking', '000000', ['Javascript', 'HTML', 'CSS'], ['C#']);
  new Profile('Allie', '../img/cleric.png', 'Cooking', '29B0FF', ['Javascript', 'HTML', 'CSS'], ['C#']);
  new Profile('Carl', '../img/wizzard.png', 'Cooking', '0560dd', ['Javascript', 'HTML', 'CSS'], ['C#', 'Python']);
  new Profile('Jose', '../img/rogue.png', 'Youtubing', 'af111c', ['Javascript', 'HTML', 'CSS'], ['C#', 'Python']);
  new Profile('Michael', '../img/rogue.png', 'Youtubing', '000000', ['Javascript'], ['Javascript']);
  new Profile('Han', '../img/monk.png', 'Coding', '29B0FF', ['Javascript', 'HTML', 'CSS', 'Python', 'Java'], ['C++']);
}

// Li builder
function buildLiEl (promptValue, displayValue) {
  var liEl = document.createElement('li');
  if (displayValue instanceof Array) {
    var newString = '';
    for(var i in displayValue) {
      newString = newString + ' ' + displayValue[i];
    }
    displayValue = newString;
  }
  liEl.textContent = promptValue + displayValue;
  return liEl;
}

// Find matches
function matchFinder (object, compareArray) {
  var matchNumber = 0;
  for (var i in compareArray) {
    if (object.userHobby === compareArray[i].userHobby) {
      matchNumber++;
    }
    for (var j in object.knownLanguage) {
      if (compareArray[i].knownLanguage.includes(object.knownLanguage[j])) {
        matchNumber++;
      }
    }
    for (var k in object.interestedLanguage) {
      if (compareArray[i].interestedLanguage.includes(object.interestedLanguage[k])) {
        matchNumber++;
      }
    }
    // Object literal to hold the index of the object in allProfiles and the number of matches
    var matchAndNumber = {
      id: i,
      matches: matchNumber
    };
    if (matchNumber >= 2) {
      matchArray.push(matchAndNumber);
    } else {
      missMatchArray.push(matchAndNumber);
    }
    matchNumber = 0;
  }
}

//Create user messaging when showing results
function addMatchingText () {
  var h2El1 = document.createElement('h2');
  h2El1.id = 'results';
  h2El1.textContent = 'You matched with ' + matchArray.length + ' classmate(s).';
  headerEl.appendChild(h2El1);
  var h2El2 = document.createElement('h2');
  h2El2.id = 'results';
  h2El2.textContent = 'You could learn from ' + missMatchArray.length + ' classmate(s).';
  headerEl.appendChild(h2El2);
  var h2El3 = document.createElement('h2');
  h2El3.id = 'results';
  h2El3.textContent = 'Your Matches ';
  mainEl.appendChild(h2El3);
  var h2El4 = document.createElement('h2');
  h2El4.id = 'results';
  h2El4.textContent = 'Classmates you could learn from:';
  sectionEl.appendChild(h2El4);
}

// Create and appened card
function createCard (profileObj) {
  var divElFlipContainer = document.createElement('div'); // Create the div that houses the card
  divElFlipContainer.setAttribute('id', profileObj.userName + 'div'); // Set the div ID to the
  divElFlipContainer.setAttribute('class', 'flipContainer');
  var divElFlipper = document.createElement('div');
  divElFlipper.setAttribute('class', 'flipper'); // Div that holds the transition
  var divElFront = document.createElement('div'); //Div that holds the front side of the card
  divElFront.setAttribute('class', 'front');
  var divElBack = document.createElement('div'); // Div for the back of the card
  divElBack.setAttribute('class', 'back');
  var h2El = document.createElement('h2'); // Create the h2 element
  h2El.textContent = profileObj.userName; // Set its contents to the userName
  divElFront.appendChild(h2El); // appened the h2 to the div
  var imgEl = document.createElement('img'); // Create the img element for the avatar
  imgEl.src = profileObj.userAvatar;
  imgEl.alt = profileObj.userName;
  divElFront.style.backgroundColor = ('#' + profileObj.userColor);
  divElFront.appendChild(imgEl);
  divElFlipper.appendChild(divElFront);
  // add interests
  var ulEl = document.createElement('ul'); // Create the ul to house the interests
  ulEl.appendChild(buildLiEl('Hobby: ', profileObj.userHobby));
  ulEl.appendChild(buildLiEl('Code Known : ', profileObj.knownLanguage));
  ulEl.appendChild(buildLiEl('Code Interest : ', profileObj.interestedLanguage));
  divElBack.style.backgroundColor = ('#' + profileObj.userColor);
  divElBack.appendChild(ulEl);
  divElFlipper.appendChild(divElBack);
  divElFlipContainer.appendChild(divElFlipper);
  return divElFlipContainer;
}

//Display the matching cards
function updateDisplay (matchArray) {
  headerEl.appendChild(createCard(newUserProfiles));
  for (var i in matchArray) {
    mainEl.appendChild(createCard(Profile.allProfiles[matchArray[i].id]));
  }
  for (var j in missMatchArray) {
    sectionEl.appendChild(createCard(Profile.allProfiles[missMatchArray[j].id]));
  }
}

localStorageHandler();
builtInProfiles();
matchFinder(newUserProfiles, Profile.allProfiles);
addMatchingText();
updateDisplay(matchArray);