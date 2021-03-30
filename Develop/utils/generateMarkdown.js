// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
  }

  if (license === "Apache") {
    return `![Apache](https://https://img.shields.io/badge/license-Apache-blue)`
  }

  if (license === "GNU") {
    return `![GNU](https://https://img.shields.io/badge/license-GNU-orange)`
  }

  if (license === "None") {
    return `![MIT](https://https://img.shields.io/badge/license-None-lightgrey)`
  }


} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests) 
  - [Contributors](#contributors)
  - [License](#license)
  - [Contact](#contact)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributors
  ${answers.contributors}

  ## License
  ${renderLicenseBadge(answers.license)}

  ## Contact
  Email: ${answers.email}

  Github: https://github.com/${answers.github}


`;
}

module.exports = generateMarkdown;
