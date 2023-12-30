// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) License - see the [LICENSE](LICENSE) file for details.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
- ${data.description}
- ${data.motivation}
- ${data.reason}
- ${data.what_problem_is_solved}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
![demo of the project]()
${data.usage}

${renderLicenseSection(data.license)}

## Feature
${data.feature}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about contribution about the project, please contact [${data.author}](mailto:${data.email}).`;
}
console.log('Start by answering these questions to generate your README file');
module.exports = generateMarkdown;
