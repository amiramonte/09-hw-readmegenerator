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
        choices: ['MIT', 'FACEBOOK', 'AMAZON'],
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
]


async function init() {
    const response = await inquirer.prompt(questions);
    writeToFile(`${response.projectTitle}.md`, generateMarkdown(response))
}


// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName), data)
}


// Function call to initialize
init();



// update writeToFile function so that each time it is run, it creates a new .md file based on projectTitle
// hardcode install & usage explanations into README template
// look at Licenses to list as options and add to question
// change License color to green
// delete unneccessary files on the readme generator
// update readme for this homework
// update readme with screencastify recording demonstrating functionality
// film and upload screencastify recording and github link
// 
// 