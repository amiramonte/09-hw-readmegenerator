// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");


inquirer.prompt ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Who is your daddy and what does he do?',
        name: 'userName',
    },
])

.then ((answers) => {
    console.log(answers)




})

























// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
