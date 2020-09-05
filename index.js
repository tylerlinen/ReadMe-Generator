const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")


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
    name: "name",
    message: "What is your name?"

},
{
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?"
},
{
    type: "input",
    name: "",
    message: "What is your name?"
}
];


// function to write README file
inquirer.prompt([questions])
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
