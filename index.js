const inquirer = require('inquirer');
const fs = require('fs');
  
inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions for this project if any?",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide any helpful or necessary information on project usage: "
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project to be covered under: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ])
    .then((answers) => {
        /*
        {
            firstName: 'jon',
            stack: 'html',
            contact: 'email;
        }
        */

        const myMd = `    
# ${answers.projectTitle}
## Description 
*${answers.description}*

-----------
### Table of Contents

[Installation](https://github.com/${answers.username}/read-me-generator#installation)

[Usage](https://github.com/${answers.username}/read-me-generator#usage)

[License](https://github.com/${answers.username}/read-me-generator#license)

[Contributing](https://github.com/${answers.username}/read-me-generator#contributing)

[Tests](https://github.com/${answers.username}/read-me-generator#tests)

[Questions](https://github.com/${answers.username}/read-me-generator#questions)

-----------
## Installation 
${answers.installation}

-----------

## Usage 
${answers.usage}

-----------

## License 
${answers.license}

-----------

## Contributing 
${answers.contributing}

-----------

## Tests 
${answers.tests}

-----------

## Questions 
${answers.questions}
* GitHub: https://github.com/${answers.username}

* For additional information, please reach out to ${answers.email}.
`

        const readme = 'sampleREADME.md';


        fs.writeFile(readme, myMd, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });
//     .catch(error => {
//         if(error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         } else {
//         // Something else when wrong
//         }
//   });