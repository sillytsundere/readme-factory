// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 
  if (license === 'Apache license 2.0') {
    license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'Creative Commons Attribution 4.0 International') {
    license = '[[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
  }
  if (license === 'Eclipse Public License 1.0') {
    license = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  if (license === 'MIT') {
    license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Mozilla Public License 2.0') {
    license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if (license === '') {
    license = 'No License';
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //do i need this if the badge has the link??
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //need to add entire license section text files?
}


function addLangBadges(badges) {
  let badgeSection = '';

  // badges.forEach(() => {
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
  // })
  return badgeSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //begin draft to write to md file
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
* [Contribution](#contribution)`
};

//add constructed table of contents to markdown draft string
markdownDraft += tOfContents;

if (data.installation !== '') {
  markdownDraft += `
## Installation

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
## How to Contribute

${data.contributing}
  `
}

markdownDraft +=`
## Badges

${addLangBadges(data.badges)}

## License

${data.license}

## Questions

If you have any questions please contact me at [my Github page](https://github.com/${data.username}) or send me an email at ${data.email}
`;

return markdownDraft;

}

module.exports = generateMarkdown;
