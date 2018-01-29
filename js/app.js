'use strict';

// if username in local storage welcome page
// else require login

// take name from form and create username

var userName;

var formElLoginForm = document.getElementById('loginForm');
var inputElUserName = document.getElementById('userName');
var buttonElLogin = document.getElementById('login');

function checkLocalStorage () {
  if (!localStorage.userName) {
    localStorage.userName = JSON.stringify([]);
  } else {
    userName = JSON.parse(localStorage.userName);
  }
}