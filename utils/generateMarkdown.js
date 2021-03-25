// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

function generateMarkdown(data) {
  return `
# ${data.title} ![GitHub package.json version](https://img.shields.io/github/package-json/v/lshim98/readme-generator)
  ${data.description}
  # Tables of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  # Installation
  ${data.installation}

  # Usage
  ${data.usages}

  # License
  ${data.licenses}

  # Contributing
  ${data.contribute}

  # Tests
  ${data.tests}

  # Questions
  ![Profile Avatar](${data.pfp})
  If you have any questions, please e-mail me at ${data.email}.

  # Credits

  Github: [${data.username}](${data.url})
  Copyright ${data.name}. All Rights Reserved.
  `;
};

module.exports = generateMarkdown;
