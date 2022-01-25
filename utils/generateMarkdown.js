// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-green.svg)`
}


// Function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

  
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