//Assignment # 25
import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "color",
    message: "Guess Alien Color"
});
if (answer.color === "Green") {
    console.log("the player just earned 5 points");
}
if (answer.color == "blue") {
    console.log();
}
