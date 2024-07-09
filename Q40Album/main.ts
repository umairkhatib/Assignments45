//Assigment # 39
function make_album(artistname:string,album_title:string,track?:number){
    
    let album:{name:string,title:string,Track?:number} ={
        name:artistname,
        title:album_title,
        //Track:track optional
    }
    if(track !== undefined){
    album.Track = track
    }
    return album;
}
console.log(make_album("strings","Durr"));
console.log(make_album("Sajjad Ali", "Cinderella"));
console.log(make_album("Atif Aslam", "adat",10));

