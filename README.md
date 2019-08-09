# POC Integration of TestCafe, CucumberJS and Allure
All tests are run against the application in the repository [automation-test-form](https://github.com/heziofernandes/automation-test-form.git)

This is a demonstration of integration [TestCafé](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe, Cucumber and [Allure](http://allure.qatools.ru/).

## Installation 

1. Make sure [Node.js](https://nodejs.org/) is installed
2. Navigate to the root of the repo
3. Use the `npm install` command

## Running tests

### Windows
You can run tests by executing the `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt

### Linux
You can run tests by executing `node_modules/cucumber/bin/cucumber-js`

### Mac
You can run tests by executing `npm run test-mac` or `node_modules/cucumber/bin/cucumber-js`

### Run Allure Report:
`allure generate allure/allure-results --clean -o allure/allure-report`                                                                  
`allure open allure/allure-report`
