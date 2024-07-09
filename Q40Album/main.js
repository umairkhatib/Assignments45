"use strict";
//Assigment # 39
function make_album(artistname, album_title, track) {
    let album = {
        name: artistname,
        title: album_title,
        //Track:track
    };
    if (track !== undefined) {
        album.Track = track;
    }
    return album;
}
console.log(make_album("strings", "Durr"));
console.log(make_album("Sajjad Ali", "Cinderella"));
console.log(make_album("Atif Aslam", "adat", 10));
