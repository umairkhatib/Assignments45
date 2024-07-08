"use strict";
//Assignment 33
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < number.length; i++) {
    const Numbers = number[i];
    let oridinalNumber;
    if (Numbers === 1) {
        oridinalNumber = "st";
    }
    else if (Numbers === 2) {
        oridinalNumber = "nd";
    }
    else if (Numbers === 3) {
        oridinalNumber = "rd";
    }
    else {
        oridinalNumber = "th";
    }
    console.log(`${Numbers}${oridinalNumber}`);
}
