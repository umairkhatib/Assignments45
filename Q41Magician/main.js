"use strict";
//Assigment # 41
let magicians = ["Criss Angel", "Harry Houdini", "David Copperfield"];
function show_magicians(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        const magic = magicians[i];
        console.log(magic);
    }
}
show_magicians(magicians);
