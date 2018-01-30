'use strict';

// var firstCard = document.getElementById('first-card');
// var firstCard = document.getElementById('second-card');
// var firstCard = document.getElementById('third-card');
// var firstCard = document.getElementById('fourth-card');
// var firstCard = document.getElementById('fifth-card');

// this holds all the properties for each Profile that will be generated. 
function Profile(userName, userAvatar, userHobby, userColor, knownLanguage, interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
}

// create new instances of the Profile object
new Profile('Zachary', '../img/wizzard.jpg', 'watching anime', '#bada55', 'Java', 'JavaScript');
new Profile('Suzanne', '../img/rogue.jpg', 'knitting', '#666012', 'CSS', 'JavaScript');
new Profile('Austin', '../img/cleric.jpg', 'watching movies', '#808080', 'JavaScript', 'Python');
new Profile('Ramon', '../img/monk.png', 'racing motorsports', '#ff0000', 'JavaScript', 'Python');
new Profile('Kevin', '../img/fighter.png', 'martial arts', '#008000', 'cSharp', 'JavaScript');

// have those new instances display in the about.html


//how do I make the new Profile object ex: first-card, second-card etc. appear on html?  We used table for salmon so do I make each instance of a card a table?