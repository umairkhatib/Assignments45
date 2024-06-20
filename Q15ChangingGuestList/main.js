"use strict";
//Assignment # 15
let personName = ["Omer", "Fatima", "Ali", "Kamran"];
//Index                        0       1        2        3
let absentGuest = "kamran";
let newGuest = "Farrukh";
personName[3] = newGuest;
let inviteMessage = ": You are invited for dinner for coming sunday";
for (let i = 0; i < personName.length; i++) {
    console.log(personName[i], inviteMessage);
}
console.log(absentGuest, "Unable to attend dinner");
