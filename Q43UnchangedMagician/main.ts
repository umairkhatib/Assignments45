//Assigment # 43
let magicians : string[]=["Criss Angel", "Harry Houdini", "David Copperfield", "samri"];

//Copying Magician array
function Copying(arr:string[]):string[]{
    return[...arr]
}
let mag_arr_copy = Copying(magicians);

function make_great(arr1:string[]){

    for (let i = 0; i < arr1.length; i++) {
        mag_arr_copy[i] = "The Great " + arr1[i];
               
    }
}

make_great(mag_arr_copy);


function show_magicians(arr:string[]){          
        console.log(arr);        
    }

show_magicians(magicians);
show_magicians(mag_arr_copy);
