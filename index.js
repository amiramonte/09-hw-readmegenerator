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
        message: 'Please write a description of your project:',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'How does someone install your project?',
        name: 'projectInstall',
    },
    {
        type: 'input',
        message: 'How does someone use your project?',
        name: 'projectUsage',
    },
    {
        type: 'input',
        message: 'Please select the appropriate license for your project',
        name: 'projectLicense',
    },
    {
        type: 'input',
        message: 'How can someone contribute to your project?',
        name: 'projectContribute',
    },
    {
        type: 'input',
        message: 'How do you test your project?',
        name: 'projectTest',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail',
    },
    {
        type: 'input',
        message: 'What is your Github user name?',
        name: 'githubUserName',
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
