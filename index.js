// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub Repository?',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description for your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe steps required to install your project, if applicable.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and steps for usage of your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide credits for any collaborators, contributors or any tutorials or articles you used to complete this project.',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Provide guidelines for how other developers can contribute to your project.',
        name: 'contributing'
    },
    {
        type: 'list',
        message: 'Select a license for your project.',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Creative Commons Zero v1.0 Universal', 'Educational Community License v2.0', 'MIT', 'Open Software License 3.0', 'No License'],
        name: 'license'
    },
    {
        type: 'checkbox',
        message: 'Select badges you would like to use from the following list.',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'Markdown'],
        name: 'badges'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //use fs to write to a file
}
//use inquire to promt user in command line and utilize q's in array and based off answers will receive bj from inquirer to utilize to write to file

// TODO: Create a function to initialize app
function init() {
    //call inquirer here to access array to ask q's, then AFTER response from inquirer callback function and write to file is inside that callback function, pass in file name and data from returned inquirer obj
    inquirer
      .prompt(questions)

      .then((response) =>
        console.log(response.title)
      )
}

// Function call to initialize app
init();
