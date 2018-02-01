'use strict';

// check if user has logged in or not and redirect if not 
if (localStorage.getItem('userName') === null) {
  alert('Not logged in, redirecting to home page.');
  window.location = '../index.html';
}

//pull in user data if they've visted before and still have profile info stored
if (localStorage.getItem('newUserName')) {
  editUser();
}

//array for storing profiles created
Profile.allProfiles = [];

//Constructor function to create user card with information from profile form
function Profile(userName,userAvatar,userHobby,userColor,knownLanguage,interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

//Example profile to test functionality
new Profile('Ramon','../img/monk.png','Cars','Red','JS,CSS,HTML','Python');

//Set content variables for the form on the DOM
var userForm = document.getElementById('newUserForm');
var deleteUser = document.getElementById('reset');

//Pull in profile form data into an object that is then stored in localStorage
function addNewUser(event) {
  event.preventDefault();
  var newUserName = event.target.userName.value;
  var newUserAvatar = event.target.userAvatar.value;
  var newUserHobby = event.target.userHobby.value;
  var newUserColor = event.target.userColor.value;
  var newKnownLanguage = [];
  var newInterestedLanguage = [];

  // check which language values have been selected on the profile form for known languages
  for(var i = 0; i < event.target.language.length; i++){
    if (event.target.language[i].checked){
      newKnownLanguage.push(event.target.language[i].value);
    }
  }

  //check which language values have been selected on the profile form for languages of interest
  for(var j = 0; j < event.target.learnLanguage.length; j++){
    if (event.target.learnLanguage[j].checked){
      newInterestedLanguage.push(event.target.learnLanguage[j].value);
    }
  }

  //create new user object instance from the constructor function
  new Profile(newUserName,newUserAvatar,newUserHobby,newUserColor,newKnownLanguage,newInterestedLanguage);

  //put new user into local storage for results page
  for(var k in Profile.allProfiles) {
    localStorage.setItem('newUserName',JSON.stringify(Profile.allProfiles[k]));
  }
  //redirect to results page when rest of function is complete, before function ends
  window.location = '../results/results.html';
}

//allow returning users (who haven't cleared their local storage) to edit their information
function editUser () {
  var langTotal = 9;
  var placeHolderInfo = JSON.parse(localStorage.getItem('newUserName'));
  document.getElementById('userName').value = placeHolderInfo.userName;
  document.getElementById('userAvatar').value = placeHolderInfo.userAvatar;
  document.getElementById('userColor').value = placeHolderInfo.userColor;
  document.getElementById('userHobby').value = placeHolderInfo.userHobby;
  for (var m = 0; m < langTotal; m++) {
    var n = 0;
    for (n in placeHolderInfo.knownLanguage) {
      if(document.getElementById('known' + m).value === placeHolderInfo.knownLanguage[n]){
        document.getElementById('known' + m).checked = true;
      }
    }
  }
  for (m = 0; m < langTotal; m++) {
    n = 0;
    for (n in placeHolderInfo.knownLanguage) {
      if(document.getElementById('interested' + m).value === placeHolderInfo.interestedLanguage[n]){
        document.getElementById('interested' + m).checked = true;
      }
    }
  }
}
//allow users to clear local storage and delete their profile if they want
function resetStorage() {
  if (confirm('Are you sure you wish to delete your profile? This will return you to the home page and you\'ll need to login again.')) {
    localStorage.clear();
    window.location = '../index.html';
  } else {
    return;
  }
}

//event listeners for both the submit and edit profile buttons
userForm.addEventListener('submit',addNewUser);
deleteUser.addEventListener('click',resetStorage);