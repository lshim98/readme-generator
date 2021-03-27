// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const markdown = require('./utils/generateMarkdown');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const questions = [
//     {
//         type: "input",
//         message: "What is your GitHub user name?",
//         name: "username"
//     },
//     {
//         type: "input",
//         message: "What is your email address?",
//         name: "email"
//     },
//     {
//         type: "input",
//         message: "What is your project's title?",
//         name: "title"
//     },
//     {
//         type: "input",
//         message: "Enter a short description of your project.",
//         name: "description"
//     },
//     {
//         type: "list",
//         message: "What license should your project have?",
//         name: "license",
//         choices: [
//             "MIT",
//             "Unlicense",
//             "Apache 2.0",
//             "GNU v3",
//             "BSD 3-Clause",
//             "Mozilla Public License 2.0"
//         ]
//     },
//     {
//         type: "input",
//         message: "Enter the installation process",
//         name: "installation",
//         default: "npm"
//     },
//     {
//         type: "input",
//         message: "What command should be run to run tests?",
//         name: "tests",
//         default: "npm run test"
//     },
//     {
//         type: "input",
//         message: "What does the user need to know about using the repository?",
//         name: "usage"
//     },
//     {
//         type: "input",
//         message: "What does the user need to know about contributing to the repository?",
//         name: "contribute"
//     }
// ];

const questions = [
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a short project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation process: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage of the project: ",
        name: "usage"

    },
    {
        type: "input",
        message: "Enter licenses used for the project: ",
        name: "licenses"
    },
    {
        type: "input",
        message: "Enter contributing information: ",
        name: "contribute"

    }, {
        type: "input",
        message: "Enter any tests you are running for your project: ",
        name: "tests"
    }
];

// function to prompt user - returns answers object
const promptUser = () => {
    return inquirer
        .prompt(questions);
}


// function to write README
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}


// function to initialize
const init = async () => {
    try {
        console.log("Welcome to the README generator.\nPlease answer the following questions:")

        // ask user for answers
        const answers = await promptUser();

        // create markdown content from user answers
        const fileContent = generateMd(answers);

        // write markdown content to README.md file
        await writeToFile("./output/README.md", fileContent);

        // tell user that file has been written
        console.log("README.md created in output folder.");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

// function call to initialize program
init();



// async function writeToFile(fileName, data) {
//     writeFileAsync(fileName, data).then(function () {
//         console.log("Successfully wrote README!");
//     }).catch(err => {
//         console.log('err ', err);
//     });
// };
// async function init() {

// await inquirer
//     .prompt(questions)
//     .then(answers => {
//         const userName = answers.username;
//         const apiData = api.getUser(userName);
//         apiData.then(res => {
//             const data =
//             {
//                 name: res.name,
//                 username: answers.username,
//                 url: res.html_url,
//                 title: answers.title,
//                 description: answers.description,
//                 installation: answers.installation,
//                 usages: answers.usage,
//                 licenses: answers.licenses,
//                 tests: answers.tests,
//                 contribute: answers.contribute,
//                 email: res.email,
//                 pfp: res.avatar_url
//             }
//             const final = markdown(data)
//             writeToFile("./output/README.md", final);
//         })
//             .catch(err => {
//                 console.log('err ', err);
//             });
//     });


// };

// init();
