import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "FirstNumber"},
  { message: "Enter Second number", type: "number", name: "SecondNumber"},
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}else if (answer.operator === "Subtraction"){
    console.log(answer.FirstNumber - answer.SecondNumber);
}else if (answer.operator === "Multiplication"){
    console.log(answer.FirstNumber * answer.SecondNumber);
}else if (answer.operator === "Division"){
    console.log (answer.FirstNumber / answer.SecondNumber);
}else{
    console.log("please select valid operator");
}

    