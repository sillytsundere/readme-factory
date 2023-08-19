const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions to be accessed by inquirer to present to user
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

// Initialize app function, uses inquirer via node to prompt user to input data to be written to markdown file
function init() {
    //call inquirer here to access questions array to ask questions
    inquirer
      .prompt(questions)

      //after response is received from prompt method initialize a callback function to write information to file utilizing node file system
      .then((response) => {
      console.log(response)
        //console.log(response.badges),
        fs.writeFileSync('./generated-readme/user-README.md', generateMarkdown({...response}))
      }
      )
      console.log('Your README markdown file has been generated and can be viewed under the generated-readme directory of the repository!')
}

// Function call to initialize app
init();
