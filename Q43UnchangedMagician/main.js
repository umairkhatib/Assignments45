"use strict";
//Assigment # 43
let magicians = ["Criss Angel", "Harry Houdini", "David Copperfield", "samri"];
//Copying Magician array
function Copying(arr) {
    return [...arr];
}
let mag_arr_copy = Copying(magicians);
function make_great(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        mag_arr_copy[i] = "The Great " + arr1[i];
    }
}
make_great(mag_arr_copy);
function show_magicians(arr) {
    console.log(arr);
}
show_magicians(magicians);
show_magicians(mag_arr_copy);
