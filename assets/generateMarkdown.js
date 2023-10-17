// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        switch (license) {
          case "MIT":
            return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
          case "Apache 2.0":
            return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
          case "GPL 3.0":
            return "![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)";
          default:
            return "";
        }
      }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
        switch (license) {
          case "MIT":
            return "[License: MIT](https://opensource.org/licenses/MIT)";
          case "Apache 2.0":
            return "[License: Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
          case "GPL 3.0":
            return "[License: GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)";
          default:
            return "";
        }
      }
      
  
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
        const licenseBadge = renderLicenseBadge(license);
        const licenseLink = renderLicenseLink(license);
      
        if (licenseBadge && licenseLink) {
          return `
## License

${licenseBadge}

This project is licensed under the ${licenseLink} license.
`;
        } else {
          return "";
        }
      }
      
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
${data.install}

## Usage
${data.usage}


## Contributing
Contributions are welcome!

## Tests
To run tests, use the following command:
\`\`\`
npm test
\`\`\`

## Questions
If you have any questions, feel free to reach out to me:
- GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
- Email: ${data.email}

${renderLicenseSection(data.license)}
 `;
};
      
  
  module.exports = generateMarkdown;
  