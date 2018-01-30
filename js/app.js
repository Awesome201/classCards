'use strict';

// userName variable
var userName;

//get element information
var inputElUserName = document.getElementById('userName');
var formElLoginForm = document.getElementById('loginForm');

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

    navliElement.class = 'nav-link';
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

//call local check
checkLocalStorage();