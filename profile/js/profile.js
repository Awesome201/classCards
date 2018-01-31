'use strict';

if (localStorage.getItem('userName') === null) {
  alert('Not logged in, redirecting to home page.');
  window.location = '../index.html';
}

Profile.allProfiles = [];

function Profile(userName,userAvatar,userHobby,userColor,knownLanguage,interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

new Profile('Ramon','../img/monk.png','Cars','Red','JS,CSS,HTML','Python');

var userForm = document.getElementById('newUserForm');
var deleteUser = document.getElementById('reset');

function addNewUser(event) {
  event.preventDefault();
  var newUserName = event.target.userName.value;
  var newUserAvatar = event.target.userAvatar.value;
  var newUserHobby = event.target.userHobby.value;
  var newUserColor = event.target.userColor.value;
  var newKnownLanguage = [];
  var newInterestedLanguage = [];

  for(var i = 0; i < event.target.language.length; i++){
    newKnownLanguage.push(event.target.language[i].value);
  }

  for(var j = 0; j < event.target.learnLanguage.length; j++){
    newInterestedLanguage.push(event.target.learnLanguage[j].value);
  }

  new Profile(newUserName,newUserAvatar,newUserHobby,newUserColor,newKnownLanguage,newInterestedLanguage);

  for(var k in Profile.allProfiles) {
    localStorage.setItem('newUserName',JSON.stringify(Profile.allProfiles[k]));
  }
}

function resetStorage() {
  if (confirm('Are you sure you wish to delete your profile? This will kick you back to the signup page.')) {
    localStorage.clear();
    window.location = '../index.html';
  } else {
    return;
  }
}

userForm.addEventListener('submit',addNewUser);
deleteUser.addEventListener('click',resetStorage);