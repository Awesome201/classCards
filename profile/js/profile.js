'use strict';

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

new Profile('Ramon','','Cars','Red','JS,CSS,HTML','Python');

var userForm = document.getElementById('newUserForm');

function addNewUser(event) {
  event.preventDefault();
  var newUserName = event.target.userName.value;
  var newUserAvatar = event.target.userAvatar.value;
  var newUserHobby = event.target.userHobby.value;
  var newUserColor = event.target.userColor.value;
  var newKnownLanguage = event.target.knownLanguage.value;
  var newInterestedLanguage = event.target.interestedLanguage.value;

  new Profile(newUserName,newUserAvatar,newUserHobby,newUserColor,newKnownLanguage,newInterestedLanguage);

  for(var i in Profile.allProfiles) {
    localStorage.setItem('newUserName',JSON.stringify(Profile.allProfiles[i]));
  }
}

userForm.addEventListener('submit',addNewUser);