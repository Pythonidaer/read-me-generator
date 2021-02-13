const inquirer = require('inquirer');
const fs = require('fs');
  
inquirer
    .prompt([
        /* Pass your questions in here */
        // {
        //     type: 'input',
        //     name: 'firstName',
        //     message: 'What is your name?',
        // },
        // {
        //     type: 'checkbox',
        //     message: 'What languages do you know?',
        //     name: 'stack',
        //     choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        // },
        // {
        //     type: 'list',
        //     message: 'What is your preferred method of communication?',
        //     name: 'contact',
        //     choices: ['email', 'phone', 'telekinesis'],
        // },
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
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
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
        ## Title 
        ${answers.projectTitle} \n
        ### Description 
        ${answers.description} \n
        ### Installation 
        ${answers.installation} \n
        ### Usage 
        ${answers.usage} \n
        ### License 
        ${answers.license} \n
        ### Contributing 
        ${answers.contributing} \n
        ### Tests 
        ${answers.tests} \n
        ### Questions 
        ${answers.questions} \n
        ### Username 
        ${answers.username} \n
        ### Email 
        ${answers.email} \n
        `
        



        // Use user feedback for... whatever!!
        // const filename = `${answers.firstName.toLowerCase().split(' ').join('')}.json`;
        const readme = 'sampleREADME.md';


        fs.writeFile(readme, myMd, (err) =>
            err ? console.log(err) : console.log('Success!')
        );

        // fs.writeFile(filename, JSON.stringify(answers, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Success!')
        // );
    });
//     .catch(error => {
//         if(error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         } else {
//         // Something else when wrong
//         }
//   });