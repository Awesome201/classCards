'use strict';

var userName;
var inputElUserName = document.getElementById('userName');
var formElLoginForm = document.getElementById('loginForm');

function checkLocalStorage () {
  if (!localStorage.userName) {
    localStorage.userName = JSON.stringify();
  } else {
    userName = JSON.parse(localStorage.userName);
  }
}

function handleLogin (e) {
  e.preventDefault();
  userName = inputElUserName.value;
  localStorage.userName = JSON.stringify(userName);
}

formElLoginForm.addEventListener('submit', handleLogin);

checkLocalStorage();