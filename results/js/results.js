'use strict';

// declare global variables 
Profile.allProfiles = [];

// Profile obj constructor
function Profile(userName,userAvatar,userHobby,userColor,knownLanguage, interestedLanguage) {
  this.userName = userName;
  this.userAvatar = userAvatar;
  this.userHobby = userHobby;
  this.userColor = userColor;
  this.knownLanguage = knownLanguage;
  this.interestedLanguage = interestedLanguage;
  Profile.allProfiles.push(this);
 }

// create test instance of objects
Profile('kevin', 'rogue', 'martial arts', 'cSharp', 'javascript',);