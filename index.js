// TODO: Include packages needed for this application
// const generateMarkdown = require('./utils/generateMarkdown')
const utils = require('./utils/generateMarkdown')
//utils.test();
const inquirer = require('inquirer')
const fs = require('fs')
//utils.test()
//console.log(utils.renderLicenseBadge("MIT"))
//console.log(utils.renderLicenseLink("MIT"))
// TODO: Create an array of questions for user input
const questions = [
    {
        question: 'What is the Title of your project?'
        
    },
];

const liscenceArray = ["Apache", "MIT", "GNU", 'None']


async function readMeGen() {

inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?"
    },
    {
        name: "description",
        type: "input",
        message: "Please Provide a description for your project."
    },
    {
        name: "installation",
        type: "input",
        message: "What is the installation process?"
    },
    {
        name: "usage",
        type: "input",
        message: "Please provide the usage of your project."
    },
    {
        name: "liscence",
        type: "list",
        message: "Which Liscence would you like?",
        choices: liscenceArray
    },
    {
        name: "contributing",
        type: "input",
        message: "Please provide the names of any contributors."
    },
    {
        name: "name",
        type: "input",
        message: "What is your github username?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?"
    },
    {
        name: "questions",
        type: "input",
        message: "please provide your github link."
    },
    {
        name: "tests",
        type: "input",
        message: "Please provide some tests."
    },
    {
        name: 'write',
        type: "confirm",
        message: "would you like to create this Readme?"
    }
]).then(answers => {
    // const utils = require('./utils/generateMarkdown')
    // utils.test();
    
    let badge = utils.renderLicenseBadge(`${answers.liscence}`);
    let link = utils.renderLicenseLink(`${answers.liscence}`);
    let section = utils.renderLicenseSection(`${answers.liscence}`);
    //console.log(badge)
    
    
    
    let template = `# ${answers.title} ${badge}
                    \n ---
                    \n ## Description
                    \n ---
                    \n ${answers.description}
                    \n ## Table of Contents
                    \n ---
                    \n ### [Installation](#installation)
                    \n ### [Usage](#usage)
                    \n ### [License](#license)
                    \n ### [Contributors](#contributors)
                    \n ### [Question](#question)
                    \n ### [Test](#test)
                    \n ---
                    \n ## Installation
                    \n ---
                    \n ${answers.installation}
                    \n ---
                    \n ## Usage
                    \n ---
                    \n ${answers.usage}
                    \n ## Liscence
                    \n ---
                    \n Lisence ${link} 
                    \n ${section}
                    \n ## Contributors
                    \n ---
                    \n ${answers.contributing}
                    \n ## Question
                    \n ---
                    \n If you have any questions you can reach me at ${answers.email}
                    \n My github username is ${answers.name} 
                    \n Click this [link](${answers.questions}) to take a look at my recent projects. 
                    \n ## Tests
                    \n ---
                    \n ${answers.tests}`;
    if(answers.write){
        fs.writeFile('./README.md', template, err => {
            if(err) {
                console.log(err)
                return
            }
        })

    }
    
})
}

readMeGen()
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', )
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
