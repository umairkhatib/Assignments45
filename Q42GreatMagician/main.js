"use strict";
//Assigment # 42
let magicians = ["Criss Angel", "Harry Houdini", "David Copperfield", "samri"];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magicians[i] = "The Great " + magicianarray[i];
    }
}
make_great(magicians);
console.log(magicians);
