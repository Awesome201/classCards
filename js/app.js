'use strict';

// userName variable
var userName;

//get element information
var inputElUserName = document.getElementById('userName');
var formElLoginForm = document.getElementById('loginForm');

//if no local, create it. else, use it
function checkLocalStorage() {
  if (!localStorage.userName) {
    localStorage.userName = JSON.stringify();
  } else {
    userName = JSON.parse(localStorage.userName);
  }
}

//if not a user, only access about, else full access
// function checkUser() {
//   if (userName === null) {

//   } else {

//   }
// }

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