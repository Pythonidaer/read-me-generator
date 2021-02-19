# Read Me Generator
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description 
>*A README file generator created in node with npm inquirer package.*

-----------
## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Resources](#resources)

* [Questions](#questions)

-----------
## Installation 
>[Click Here To Watch How To Video](https://drive.google.com/file/d/1b-O66w8oAv6gTna-eIdlKhimqo0syqEJ/view)

1. Make sure node.js is installed on your computer.
2. Create directory.
3. From directory within terminal, initialize npm in project with `npm init -y`
4. Create a .gitignore file and add in the `node_modules` directory
5. Type `npm install inquirer`
6. In `index.js`, make sure inquirer library is brought inside the file.
7. This can be done by adding the line of code `const inquirer = require("inquirer");` but if you are cloning this repo it is already there.

-----------

## Usage 
There are many good videos on node and inquirer on YouTube and Medium. I have attached some resources at the end of this file, but one of the best sources will be YouTube, Medium, and obviously the node (file structure in particular) and npm (inquirer) documentation.

-----------

## License 
This project was created under the MIT License.

-----------

## Contributing 
This was a homework assignment by Jonathan Hammond (me) so there's not really much to contribute on. However, feel free to contact me (info found below) if you have any questions or want to discuss how to improve or expand this project.

-----------

## Tests 
Please review the `TEST.md` file to see how README files look when created with this generator.

-----------

## Resources
[Node.js File System](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_promises_api)

[How to escape a backtick ` within in-line Markdown](https://meta.stackexchange.com/questions/82718/how-do-i-escape-a-backtick-within-in-line-code-in-markdown)

[Reading Node Documentation](https://www.youtube.com/results?search_query=reading+node+documentation)

[Node.js Documentation - fs](https://nodejs.org/api/fs.html)

[How to use writeFileAsync function in fs](https://www.codota.com/code/javascript/functions/fs/writeFileAsync)

[HTML Inquirier Mini Project](https://github.com/Pythonidaer/html-inquirer-mini-project/blob/main/index.js)

[OpenSource Licenses - Alphabetical](https://opensource.org/licenses/alphabetical)

[Shields.io Licenses](https://shields.io/category/license)

[Markdown License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

[How to use inquirer.js](https://medium.com/javascript-in-plain-english/how-to-inquirer-js-c10a4e05ef1f)

[Async/Await vs Promises](https://levelup.gitconnected.com/async-await-vs-promises-4fe98d11038f)

[W3Schools - Switch Statements](https://www.w3schools.com/js/js_switch.asp)

[Tutorial - Manual Table of Contents in GitHub README](https://www.setcorrect.com/portfolio/work11/)

[Hillary Fraley - Nested Table of Contents in a README.md](https://github.com/hillaryfraley/jobbriefings#purpose)

[Connie Tran - Alternative Ways to create the README Generator](https://github.com/connietran-dev/readme-generator)

[JPD61, Joseph DeWoody - Async/Await on a README Generator](https://github.com/jpd61/README-generator)


-----------

## Questions 
GitHub: https://github.com/Pythonidaer

For additional information, please reach out to codefolio.work@gmail.com

<a href="https://twitter.com/jonamichahammo">
    <img alt="Twitter: jonamichahammo" src="https://img.shields.io/twitter/follow/jonamichahammo.svg?style=social" target="_blank" />
</a>


-----------

## Future Improvements
As homeworks are on tight deadlines, I didn't spend as much time as I'd have liked to on catching errors

In the future, I'd like to either incorporate a recursive function that always repeats for prompts that are not filled correctly by the user, or try something like what you see below:
```
.catch(error => {    
    if(error.isTtyError) {
    //   
    } else {
    //     
}
```