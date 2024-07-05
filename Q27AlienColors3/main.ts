import inquirer from "inquirer";

let answer = await inquirer.prompt({
    name: "color",
    message: "Guess Alien Color"

})
if (answer.color ==="Green"){
    console.log("the player just earned 5 points")
}
else if(answer.color ==="Yellow"){
    console.log("player just earned 10 points.");
}
else if(answer.color ==="Red"){
    console.log("player just earned 15 points.");
}