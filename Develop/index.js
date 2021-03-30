// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache', 'GNU', 'None'],
    },

    {
        type: 'input',
        name: 'testing',
        message: 'What testing orecedures did you use?',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'List any of your contributors.',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
    })
}

// Function call to initialize app
init();
