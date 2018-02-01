'use strict';

//give users notice that our site is best viewed on latest
if (localStorage.getItem('alert') === null){
  alert('Please note that this site is best viewed on the latest version of Chrome.');
  localStorage.setItem('alert', '1');
}

// userName variable
var userName;

//get element information
var inputElUserName = document.getElementById('userName');
var formElLoginForm = document.getElementById('loginForm');
var mainEl = document.getElementById('content');

function buildLiEl (promptValue, displayValue) {
  var liEl = document.createElement('li');
  liEl.textContent = promptValue + displayValue;
  return liEl;
}

function createCard () {
  var divElFlipContainer = document.createElement('div'); // Create the div that houses the card
  divElFlipContainer.setAttribute('id', 'exampleCard'); // Set the div ID to the
  divElFlipContainer.setAttribute('class', 'flipContainer1');
  var divElFlipper = document.createElement('div');
  divElFlipper.setAttribute('class', 'flipper1');
  var divElFront = document.createElement('div');
  divElFront.setAttribute('class', 'front1');
  var divElBack = document.createElement('div');
  divElBack.setAttribute('class', 'back1');
  var h2El = document.createElement('h2'); // Create the h2 element
  h2El.textContent = 'This could be you! Hover for more'; // Set its contents to the userName
  divElFront.appendChild(h2El); // appened the h2 to the div
  divElFlipper.appendChild(divElFront);

  var gifOfAllAvatars = document.createElement('img');
  gifOfAllAvatars.id = 'card-img';
  gifOfAllAvatars.src = 'img/avatar.gif';
  h2El.appendChild(gifOfAllAvatars);

  // add interests
  var ulEl = document.createElement('ul'); // Create the ul to house the interests
  ulEl.appendChild(buildLiEl('Hobby: ', 'Your info here'));
  ulEl.appendChild(buildLiEl('Code Known : ', 'Your info here'));
  ulEl.appendChild(buildLiEl('Code Interest : ', 'Your info here'));
  divElBack.appendChild(ulEl);
  divElFlipper.appendChild(divElBack);
  divElFlipContainer.appendChild(divElFlipper);
  return divElFlipContainer;
}

//if no local, create it. else, use it
function checkLocalStorage() {
  if (localStorage.getItem('userName') === null) {
    return;
  } else {
    userName = JSON.parse(localStorage.userName);

    var navElementLink = document.getElementById('nav-link1');
    var navOlElement = document.getElementById('conditional-nav');
    var navliElement = document.createElement('li');
    var navaElement = document.createElement('a');

    navliElement.id = 'nav-link';
    navaElement.textContent = 'Edit Your Profile';
    navaElement.href = 'profile/profile.html';
    navliElement.appendChild(navaElement);
    navOlElement.appendChild(navliElement);
    navliElement.after(navElementLink);

    navliElement = document.createElement('li');
    navaElement = document.createElement('a');
    navliElement.id = 'nav-link';
    navaElement.textContent = 'See Your Class Cards';
    navaElement.href = 'results/results.html';
    navliElement.appendChild(navaElement);
    navOlElement.appendChild(navliElement);
    navliElement.after(navElementLink);
  }
}
//set the value to user input and save to local storage
function handleLogin (e) {
  e.preventDefault();
  userName = inputElUserName.value;
  localStorage.userName = JSON.stringify(userName);
  window.location = 'profile/profile.html';
}

//call login function on submit
formElLoginForm.addEventListener('submit', handleLogin);

function updateDisplay () {
  mainEl.appendChild(createCard());
}

//call local check
checkLocalStorage();
updateDisplay();