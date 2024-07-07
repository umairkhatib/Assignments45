"use strict";
//Assignment # 30
let userName = ["admin", "umair", "ali", "fatima", "omer"];
userName.forEach(username => {
    if (username === "admin") {
        console.log("Hello", username, "would you like to see a status report?");
    }
    else {
        console.log("hello", username, "thank you for logging in again.");
    }
});
