// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

    
  ---
  
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Author](#author)

  
  ---
  
  ## Description
  ${answers.projectDescription}
  
  ---
  
  ## Installation
  
  ${answers.projectInstall}
  
   ---
  
  ## Usage
  ${answers.projectUsage}
  
  ---
  
  ## License
  ${answers.projectLicense}
  
  ${renderLicenseBadge(answers.projectLicense)}
  
  ---
  ## Contributing
  ${answers.projectContribute}
  
  ---
  
  ## Questions
  
  Contact me at: ${answers.userEmail}
  
  ---
  ## Author
  
  [Github](https://www.github.com/${answers.githubUserName})
  
  `;
}

module.exports = generateMarkdown;
