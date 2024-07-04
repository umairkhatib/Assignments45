//Assignment # 24
console.log("Equality Test with String :",("Umair Aziz" as string) === "Umair Aziz");
console.log("Inequality Test with String :",("Umair Aziz" as string) === "Kamran");

console.log("Lowercase Test : ","UMAIR AZIZ".toLowerCase() === "umair aziz");

//Numerical Tests
console.log("Equality Test with number :", 10 === 10);
console.log("Inequality Test with number :", (10 as number) !== 11);
console.log("Greater Than :", 10 > 8);
console.log("less Than :", 10 < 12);
console.log("Greater Than and equal to :", 10 >= 10);
console.log("less Than and equal to :", 10 <= 8);

//Tests using "and" and "or" operators
console.log("And operator", 7>8 && 12>8);
console.log("OR operator", 10>8 || 6>8);

//Test whether an item is in a array
let programing :string[]= ["GW basic", "Pascal", "C #", "Asp.net", "Typescript"];
console.log("Inclution Test : ", programing.includes("Typescript"));
//Test whether an item is not in a array
console.log("Exclution Test : ", programing.includes("PHP"));