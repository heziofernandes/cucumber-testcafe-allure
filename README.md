# Integration of TestCafe and CucumberJS

This is a demonstration of integration [TestCafé](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe and Cucumber.

## Installation 

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Navigate to the root of the repo
3. Use the `npm install` command

## Running tests

### Windows
You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

### Mac or Linux
You can run tests by executing `node_modules/cucumber/bin/cucumber-js`

### Run Allure Report:
`allure generate allure/allure-results --clean -o allure/allure-report`                                                                  
`allure open allure/allure-report`
