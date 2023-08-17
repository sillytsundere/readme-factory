// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub username?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your contact email address.',
    },
    {
        name: 'repo',
        type: 'input',
        message: 'What is the name of your GitHub Repository?',
    },
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a description for your project.',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Describe steps required to install your project, if applicable.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and steps for usage of your project.',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'List and describe any tests written for your project and how to run them, if applicable.'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Provide guidelines for how other developers can contribute to your project.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select a license for your project.',
        choices: ['Apache license 2.0', 'Creative Commons Attribution 4.0 International', 'Eclipse Public License 1.0', 'MIT', 'Mozilla Public License 2.0', 'No License'],
    },
    {
        name: 'badges',
        type: 'checkbox',
        message: 'Select badges you would like to use from the following list.',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'Markdown'],
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     //use fs to write to a file
//     const fileString = generateMarkdown(data);
//     fs.writeToFile
// }
//use inquire to promt user in command line and utilize q's in array and based off answers will receive obj from inquirer to utilize to write to file, 'response' is the object

// TODO: Create a function to initialize app
function init() {
    //call inquirer here to access array to ask q's, then AFTER response from inquirer callback function and write to file is inside that callback function, pass in file name and data from returned inquirer obj
    inquirer
      .prompt(questions)

      .then((response) => {
      console.log(response)
        //console.log(response.badges),
        fs.writeFileSync('./generated-readme/user-README.md', generateMarkdown({...response}))
      }
      )
}

// Function call to initialize app
init();
