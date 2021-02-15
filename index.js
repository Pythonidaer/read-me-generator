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
            message: "Which license should this project be covered under? (Use arrow keys)",
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
            message: "What are the contributing guidelines for other developers?"
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
Instructions for President's Day:
   1. Update README to include resources used for node, npm inquirer, npm, as well as GitHub inspirations.
   2. Experiment with module.exports = filename // then const filename = require('./filename.js');
   3. Consider extracting entire template literal into a function exported from another file.

   7. Make sure GitHub repository contains correct MARKDOWN file in sample readme instructions.
   8. Record video and make sure even I could figure this out when I first started.
   9. Include all URLs used for this project in actual README
   10. Break below components into functional components.
   11. Bring this project up with Byron on Friday's tutor class to see if he would create this differently.
   12. Read more on node fs/ES5-6 documentation to see if there is a cleaner way/better way to code below.
   13. Once complete, attempt to refactor with a catch statement.
   14. Consider adding emojis to spruce things up.

   To DOs:
    * Student does not include link to walkthrough video in README
    * Walkthrough video does not demonstrate how to invoke the application
    * Walkthrough video doesn't demonstrate any of the prompts receiving user input
    * Repository README is missing either the description or the link to the walkthrough video
*/




        switch (`${answers.license}`) {
            case 'Apache':
                licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-green.svg'
                licenseURL = 'https://opensource.org/licenses/Apache-2.0';
                break;
            case 'Academic':
                licenseBadge = 'https://img.shields.io/badge/License-Academic-informational.svg'
                licenseURL = 'https://opensource.org/licenses/AFL-3.0';
                break;
            case 'GNU':
                licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
                licenseURL = 'https://opensource.org/licenses/GPL-3.0';
                break;
            case 'ISC':
                licenseBadge = 'https://img.shields.io/badge/License-ISC-blueviolet.svg'
                licenseURL = 'https://opensource.org/licenses/ISC';
                break;
            case 'MIT':
                licenseBadge = 'https://img.shields.io/badge/License-MIT-brightgreen.svg'
                licenseURL = 'https://opensource.org/licenses/MIT';
                break;
            case 'Mozilla':
                licenseBadge = 'https://img.shields.io/badge/License-MPL%202.0-orange.svg'
                licenseURL = 'https://opensource.org/licenses/MPL-2.0';
                break;
            case 'Open':
                licenseBadge = 'https://img.shields.io/badge/License-OSL%203.0-sucess.svg'
                licenseURL = 'https://opensource.org/licenses/OSL-3.0';
                break;
            
        }

        const myMd = `    
# ${answers.projectTitle}
[![License](${licenseBadge})](${licenseURL})



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
This project is covered under the ${answers.license} license.

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

* For additional information, please send an email to: ${answers.email}
`

        const readme = 'TEST.md';


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