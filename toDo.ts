// Develop a simple command line Todo app using TypeScript, Node.js and Inquirer.

// Create a GitHub repository for the project and submit its URL in the project submission form.

//---------------------------------Assignment-------------------------

// 1. Create a command line application that allows the user to enter a task and a due date.

import inquirer from "inquirer";

let toDoList: string[] = [];
let loop: boolean = true;
interface toDoInput {
  toDoInput: string;
  confirm: boolean;
}

while (loop) {
  const toDoInput: toDoInput = await inquirer.prompt([
    {
      type: "input",
      name: "toDoInput",
      message: "Enter a task and date.",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Add another task?",
      default: false,
    },
  ]);
  const toDoUserInput = toDoInput.toDoInput;
  const confirm = toDoInput.confirm;
  if (toDoUserInput) {
    toDoList.push(toDoUserInput);
    console.log(toDoList);
  }
  loop = confirm;
}
if (toDoList.length > 0) {
  console.log("My todo list is: ");
  for (let i = 0; i < toDoList.length; i++) {
    console.log(`${i + 1}. ${toDoList[i]},`);
  }
} else {
  console.log(`Empty To-Do list`);
}
