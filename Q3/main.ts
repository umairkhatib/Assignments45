// Assignment # 3


let personName : string = "umAir khaTib";

//upercase
console.log("lowercase :" , personName.toLowerCase());

//lowercase
console.log("Uppercase :" , personName.toUpperCase());

//Titlecase
let words : string[] = personName.split(" ")
//console.log(words);

let titleCase : string = " "
for (let word of words){
    titleCase +=word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()+" "
}
console.log("TitleCase :",titleCase);