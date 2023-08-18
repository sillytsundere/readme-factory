//function that returns a license badge based on which license is passed in/chosen in inquirer prompt
//If there is no license, returns the string "No License"
function renderLicenseBadge(license) {
 
  if (license === 'Apache license 2.0') {
    license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else
  if (license === 'Creative Commons Attribution 4.0 International') {
    license = '[[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
  } else
  if (license === 'Eclipse Public License 1.0') {
    license = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else
  if (license === 'MIT') {
    license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else
  if (license === 'Mozilla Public License 2.0') {
    license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else
  if (license === '') {
    license = 'No License';
  }
  return license;
}

//this function returns the link to the license
//If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'Apache license 2.0') {
    license = `(https://opensource.org/licenses/Apache-2.0)`;
  } else
  if (license === 'Creative Commons Attribution 4.0 International') {
    license = `(https://creativecommons.org/licenses/by/4.0/)`;
  } else
  if (license === 'Eclipse Public License 1.0') {
    license = `(https://opensource.org/licenses/EPL-1.0)`;
  } else
  if (license === 'MIT') {
    license = `(https://opensource.org/licenses/MIT)`;
  } else
  if (license === 'Mozilla Public License 2.0') {
    license = `(https://opensource.org/licenses/MPL-2.0)`;
  } else
  if (license === '') {
    license = '';
  }
  return license;
}

//function to add badges to markdown file
function addLangBadges(badges) {
  let badgeSection = '';

  if (badges.includes('HTML')) {
    badgeSection += `
![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
`
  }
  if (badges.includes('CSS')) {
    badgeSection += `
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
`
  }
  if (badges.includes('JavaScript')) {
    badgeSection += `
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
`
  }
  if (badges.includes('JQuery')) {
    badgeSection += `
![Static Badge](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
`
  }
  if (badges.includes('Bootstrap')) {
    badgeSection += `
![Static Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
`
  }
  if (badges.includes('Markdown')) {
    badgeSection += `
![Static Badge](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) 
`
  }
  return badgeSection;
}


//this function generates markdown for user-README that will be written to file by fs.writeFile
function generateMarkdown(data) {
//begin draft to write to markdown file
let markdownDraft = 
`# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}
`;

//make table of contents with info from user input
let tOfContents = `## Table of Contents`;

if (data.installation !== '') {
  tOfContents += `
* [Installation](#installation)`
}
if (data.usage !== '') {
  tOfContents += `
* [Usage](#usage)`
}
if (data.tests !== '') {
  tOfContents += `
* [Tests](#tests)`
}
if (data.contributing !== '') {
  tOfContents += `
* [Contributing](#contributing)`
};

//add constructed table of contents to markdown draft string
markdownDraft += tOfContents;

if (data.installation !== '') {
  markdownDraft += `
## Installation

The repository for my project can be reached at this link: [${data.repo}](https://github.com/${data.username}/${data.repo})

${data.installation}
  `
}

if (data.usage !== '') {
  markdownDraft += `
## Usage

${data.usage}
  `
}

if (data.tests !== '') {
  markdownDraft += `
## Tests

${data.tests}
  `
}

if (data.contributing !== '') {
  markdownDraft += `
## Contributing

${data.contributing}
  `
}

//add final sections to markdown draft string
markdownDraft +=`
## Badges

${addLangBadges(data.badges)}

## License

${data.license} Read more at: ${renderLicenseLink(data.license)}

## Questions

If you have any questions please contact me at [my Github page](https://github.com/${data.username}) or send me an email at ${data.email}
`;

//returns the string to be written to the markdown file
return markdownDraft;
}

//export the generateMarkdown function to be used in the index.js file which will then use the returned string and write it to markdown file by fs.writeFile
module.exports = generateMarkdown;
