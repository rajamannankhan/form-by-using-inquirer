import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "name",
        message: "enter your name",
        type: "input"
    },
    {
        name: "age",
        type: "number",
        message: "enter your age",
    },
    {
        name: "gender",
        type: "input",
        message: "what is your gender",
    }
]);
console.log("your name is:" + answer.name);
console.log("your age is:" + answer.age);
console.log("your gender is :" + answer.gender);
