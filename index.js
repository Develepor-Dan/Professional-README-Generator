// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); // Assuming you have a separate file for generating markdown

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
    message: 'Provide a brief description of your project:',
  },
  // Add more questions for other information you want to collect
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  // Add more questions as needed
  {
    type: 'input',
    name: 'author',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README file generated successfully!')
  );
  console.log('README file being created');
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdownContent = generateMarkdown(responses);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();
