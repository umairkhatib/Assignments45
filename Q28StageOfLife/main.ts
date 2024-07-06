// Assignment # 28
import inquirer from "inquirer";

let answer = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "What is your age : "

})
if (answer.age < 2){
    console.log("the person is a baby")
}
else if(answer.age >= 2 && answer.age < 4 ){
    console.log("the person is a toddler");
}
else if(answer.age >= 4 && answer.age < 13 ){
    console.log("the person is a kid");
}
else if(answer.age >= 13 && answer.age < 20 ){
    console.log("person is a teenager");
}
else if(answer.age >= 20 && answer.age < 65 ){
    console.log("the person is an adult");
}
else if(answer.age >= 65){
    console.log("the person is an elder");

}