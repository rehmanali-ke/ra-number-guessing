#! /usr/bin/env node

import inquirer from "inquirer";

const randomNum = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNum",
    type: "number",
    message: "Please Guess a Number from 1 to 6",
  },
]);
console.log (answer);

if (answer.userGuessedNum == randomNum) {
  console.log("Congratulations! You Guessed a Right Number");
} else {
  console.log("Wrong Number, Try Again");
}
