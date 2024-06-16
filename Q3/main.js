// Assignment # 3
var personName = "umAir khaTib";
//upercase
console.log("lowercase :", personName.toLowerCase());
//lowercase
console.log("Uppercase :", personName.toUpperCase());
//Titlecase
var words = personName.split(" ");
//console.log(words);
var titleCase = " ";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    titleCase += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}
console.log("TitleCase :", titleCase);
