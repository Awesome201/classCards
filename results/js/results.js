'use strict';

if (localStorage.getItem('userName') === null) {
  alert('Not logged in, redirecting to home page.');
  window.location = '../index.html';
}

// declare global letiables
let mainEl = document.getElementById('content');
let headerEl = document.getElementById('userCard');
let sectionEl = document.getElementById('misMatchSection');

// Add obj array
let matchArray = [];
let missMatchArray = [];
let newUserProfiles;
Profile.allProfiles = [];

// Test letiables
let knownArray = ['JavaScript', 'HTML', 'CSS'];
let interestArray = ['Python', 'C#'];

// Profile obj constructor
const Profile = (userName,userAvatar,userHobby,userColor,knownLanguage, interestedLanguage) => {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
};

// Local storage check
const localStorageHandler = () => {
  newUserProfiles = JSON.parse(localStorage.newUserName);
};

// create test instance of objects
const builtInProfiles = () => {
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
};

// Li builder
const buildLiEl = (promptValue, displayValue) => {
  let liEl = document.createElement('li');
  if (displayValue instanceof Array) {
    let newString = '';
    for(let i in displayValue) {
      newString = newString + ' ' + displayValue[i];
    }
    displayValue = newString;
  }
  liEl.textContent = promptValue + displayValue;
  return liEl;
};

// Find matches
const matchFinder = (object, compareArray) => {
  let matchNumber = 0;
  for (let i in compareArray) {
    if (object.userHobby === compareArray[i].userHobby) {
      matchNumber++;
    }
    for (let j in object.knownLanguage) {
      if (compareArray[i].knownLanguage.includes(object.knownLanguage[j])) {
        matchNumber++;
      }
    }
    for (let k in object.interestedLanguage) {
      if (compareArray[i].interestedLanguage.includes(object.interestedLanguage[k])) {
        matchNumber++;
      }
    }
    // Object literal to hold the index of the object in allProfiles and the number of matches
    let matchAndNumber = {
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
};

//Create user messaging when showing results
const addMatchingText = () => {
  let h2El1 = document.createElement('h2');
  h2El1.id = 'results';
  h2El1.textContent = 'You matched with ' + matchArray.length + ' classmate(s).';
  headerEl.appendChild(h2El1);
  let h2El2 = document.createElement('h2');
  h2El2.id = 'results';
  h2El2.textContent = 'You could learn from ' + missMatchArray.length + ' classmate(s).';
  headerEl.appendChild(h2El2);
  let h2El3 = document.createElement('h2');
  h2El3.id = 'results';
  h2El3.textContent = 'Your Matches ';
  mainEl.appendChild(h2El3);
  let h2El4 = document.createElement('h2');
  h2El4.id = 'results';
  h2El4.textContent = 'Classmates you could learn from:';
  sectionEl.appendChild(h2El4);
};

// Create and appened card
const createCard = (profileObj) => {
  let divElFlipContainer = document.createElement('div'); // Create the div that houses the card
  divElFlipContainer.setAttribute('id', profileObj.userName + 'div'); // Set the div ID to the
  divElFlipContainer.setAttribute('class', 'flipContainer');
  let divElFlipper = document.createElement('div');
  divElFlipper.setAttribute('class', 'flipper'); // Div that holds the transition
  let divElFront = document.createElement('div'); //Div that holds the front side of the card
  divElFront.setAttribute('class', 'front');
  let divElBack = document.createElement('div'); // Div for the back of the card
  divElBack.setAttribute('class', 'back');
  let h2El = document.createElement('h2'); // Create the h2 element
  h2El.textContent = profileObj.userName; // Set its contents to the userName
  divElFront.appendChild(h2El); // appened the h2 to the div
  let imgEl = document.createElement('img'); // Create the img element for the avatar
  imgEl.src = profileObj.userAvatar;
  imgEl.alt = profileObj.userName;
  divElFront.style.backgroundColor = ('#' + profileObj.userColor);
  divElFront.appendChild(imgEl);
  divElFlipper.appendChild(divElFront);
  // add interests
  let ulEl = document.createElement('ul'); // Create the ul to house the interests
  ulEl.appendChild(buildLiEl('Hobby: ', profileObj.userHobby));
  ulEl.appendChild(buildLiEl('Code Known : ', profileObj.knownLanguage));
  ulEl.appendChild(buildLiEl('Code Interest : ', profileObj.interestedLanguage));
  divElBack.style.backgroundColor = ('#' + profileObj.userColor);
  divElBack.appendChild(ulEl);
  divElFlipper.appendChild(divElBack);
  divElFlipContainer.appendChild(divElFlipper);
  return divElFlipContainer;
};

//Display the matching cards
const updateDisplay = (matchArray) => {
  headerEl.appendChild(createCard(newUserProfiles));
  for (let i in matchArray) {
    mainEl.appendChild(createCard(Profile.allProfiles[matchArray[i].id]));
  }
  for (let j in missMatchArray) {
    sectionEl.appendChild(createCard(Profile.allProfiles[missMatchArray[j].id]));
  }
};

localStorageHandler();
builtInProfiles();
matchFinder(newUserProfiles, Profile.allProfiles);
addMatchingText();
updateDisplay(matchArray);