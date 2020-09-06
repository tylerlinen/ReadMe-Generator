const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Enter a description of your project."
},
{
    type: "input",
    name: "installation",
    message: "What are the installation steps? If none enter none."
},
{
    type: "input",
    name: "usage",
    message: "What can your project be used for?"

},
{
    type: "input",
    name: "credits",
    message: "List all collaborators if any."

},
{
    type: "input",
    name: "license",
    message: "List any Licenses? go to https://choosealicense.com/"

},
{
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?"
}
];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
    writeToFile("README.md", generateMarkdown(answers))
    
    })
   
}

// function call to initialize program
init();
