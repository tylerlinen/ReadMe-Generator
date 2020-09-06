// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description:
    > ${data.description}

    ## Installation:
    > ${data.installation}

    ## Usage:
    > ${data.usage}

    ## Credits:
    > ${data.credits}
    
    ## License:
    > ${data.license}
    
    ## Contribution:
    > ${data.contribution}
    
  `;
}

module.exports = generateMarkdown;