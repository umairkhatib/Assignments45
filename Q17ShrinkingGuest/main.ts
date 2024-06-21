// Assignment # 17
let personName : string[]= ["Omer", "Fatima", "Ali", "Kamran"];
//Index                        0       1        2        3

let absentGuest : string = "kamran";

let newGuest : string = "Farrukh";

personName[3]= newGuest;


personName.unshift("Noman");
personName.splice(3,0,"Farhan");
personName.push("Umair");

//Removing guests

console.log("Sorry ! Due to Bigger table unavailibilty We can only invite 2 Guests");

while (personName.length > 2) {
    let removeGuest=personName.pop();
    console.log(removeGuest , ": Sorry you are not invited for Dinner");    
}

//Printing blank Line
console.log();

let inviteMessage:string=": You are still invited for dinner On coming sunday"

for (let i = 0; i < personName.length; i++) {
    console.log(personName[i] , inviteMessage);
} 

//Printing blank Line
console.log();

//Removing remaining 2 guests
personName.splice(0,2);
console.log(personName);