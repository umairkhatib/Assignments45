"use strict";
// Assignment #16
let personName = ["Omer", "Fatima", "Ali", "Kamran"];
//Index                        0       1        2        3
let absentGuest = "kamran";
let newGuest = "Farrukh";
personName[3] = newGuest;
//Inviting more guests
console.log("Hurray !!! We found a bigger table , so we invite 3 more guests");
personName.unshift("Noman");
personName.splice(3, 0, "Farhan");
personName.push("Umair");
let inviteMessage = ": You are invited for dinner On coming sunday";
for (let i = 0; i < personName.length; i++) {
    console.log(personName[i], inviteMessage);
}
