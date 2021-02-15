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

        switch (`${answers.license}`) {
            case 'Apache':
                licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-green.svg'
                break;
            case 'Academic':
                licenseBadge = 'https://img.shields.io/badge/License-Academic-informational.svg'
                break;
            case 'GNU':
                licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
                break;
            case 'ISC':
                licenseBadge = 'https://img.shields.io/badge/License-ISC-blueviolet.svg'
                break;
            case 'MIT':
                licenseBadge = 'https://img.shields.io/badge/License-MIT-brightgreen.svg'
                break;
            case 'Mozilla':
                licenseBadge = 'https://img.shields.io/badge/License-MPL%202.0-orange.svg'
                break;
            case 'Open':
                licenseBadge = 'https://img.shields.io/badge/License-ODC_BY-sucess.svg'
                break;
            
        }

        const myMd = `    
# ${answers.projectTitle}
![License](${licenseBadge})



## Description 
*${answers.description}*

-----------
## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

-----------
## Installation 
${answers.installation}

-----------

## Usage 
${answers.usage}

-----------

## License 
${answers.license} License

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

* For additional information, please reach out to ${answers.email}
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