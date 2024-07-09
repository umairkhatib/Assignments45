//Assigment # 41
let magicians : string[]=["Criss Angel", "Harry Houdini", "David Copperfield"];
function show_magicians(magicianarray:string[]){

    for (let i = 0; i < magicianarray.length; i++) {
        const magic = magicians[i];
        console.log(magic);        
    }
}
show_magicians(magicians);
