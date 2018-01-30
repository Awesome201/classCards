'use strict'

var firstCard = document.getElementById('first-card');
var firstCard = document.getElementById('second-card');
var firstCard = document.getElementById('third-card');
var firstCard = document.getElementById('fourth-card');
var firstCard = document.getElementById('fifth-card');


function Profile(userName, userAvatar, userHobby, userColor, knownLanguage, interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

//how do I make the new Profile object ex: first-card, second-card etc. appear on html?  We used table for salmon so do I make each instance of a card a table?