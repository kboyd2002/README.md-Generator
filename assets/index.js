const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of your Project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the best description of your Project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What is the process of installing your Project?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'What is the usage your Project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'githubUser',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'What is the license for your project?',
    choices: ["MIT","Apache 2.0","GPL 3.0"],
    name: 'license',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync('./output/' + fileName, data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(response => {
    const markdown = generateMarkdown(response)
    console.log(markdown)
    writeToFile('README.md', markdown)
  });
}

// Function call to initialize app
init();

