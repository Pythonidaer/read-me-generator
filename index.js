// import object from library from package manager we're using.
const inquirer = require('inquirer');
// import file system object from node.
const fs = require('fs');
  
// more information on using inquirer is found at npmjs.com
// inputs = user types characters and presses enter
// list = user uses up/down keys to select option then presses enter
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
    // When user successfully completes application prompts, object answers passes as a resolved Promise.
    .then((answers) => {
        // Depending on which license the user selects, determine which badge and corresponding link shows at the top of the README.
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
        // name of our markdown file to be created.
        const readme = 'sample.md';
        // my markdown is composed of this file; notice the string template literals utilized with markdown syntax.
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
        // write contents of 'myMy - my markdown' to file named sample.md
        // if there is an error, log the error; else log Success!
        fs.writeFile(readme, myMd, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });