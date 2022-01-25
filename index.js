const inquirer = require("inquirer");

const fs = require("fs");

const generateMarkdown = require ("./utils/generateMarkdown")

const path = require('path');

const questions = [
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
        type: 'list',
        choices: ['MIT', 'Apache License 2.0', 'Boost Software License 1.0', 'Microsoft Public License', 'Mozilla Public License 2.0', 'Open Software License 3.0'],
        message: 'Please select the appropriate license for your project',
        name: 'projectLicense',
    },
    {
        type: 'input',
        message: 'Do you want someone to contribute to your project and if so, how can someone contribute to your project?',
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
        message: 'What is your name?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your Github user name?',
        name: 'githubUserName',
    },
]

// Function to call inquirer.prompt and pass arguments to writeToFile function
async function init() {
    const response = await inquirer.prompt(questions);
    writeToFile(`${response.projectTitle}.md`, generateMarkdown(response))
    console.log(`${response.projectTitle}.md created!`)
}


// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName), data)
}


// Function call to initialize
init();



// update readme for this homework
// update readme with screencastify recording demonstrating functionality
// film and upload screencastify recording and github link