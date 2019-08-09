const {Given, When, Then} = require('cucumber');
const registerPage = require('../support/pages/registerPage');
const randonFakeData = require('casual');

Given('Im user logged in', async function() {
    await await testController.navigateTo(registerPage.register.url());
});
When('I insert a name', async function () {
    await testController.typeText(registerPage.register.nameInput(),randonFakeData.full_name);
});
When('I insert a login', async function () {
    await testController.typeText(registerPage.register.loginInput(),randonFakeData.domain);
});
When('I inform a password',async function () {
    await testController.typeText(registerPage.register.passswordInput(),randonFakeData.password);
});
When('I inform an email',async function () {
    await testController.typeText(registerPage.register.emailInput(),randonFakeData.email);
});
When('I insert a main address',async function () {
    await testController.typeText(registerPage.register.addressInput(),randonFakeData.address);
});
When('I inform additional address details',async function () {
    await testController.typeText(registerPage.register.addressDetailsInput(),randonFakeData.address2);
});
When('I select an {string}',async function (education) {
    await registerPage.register.selectEducation(education);
});
When('I select a {string} of interest', async function (course) {
    await registerPage.register.selectCourse(course);
});
When('I save the form',async function() {
    await testController.click(registerPage.register.submit());
    await testController.wait(5000);
});
Then('the system should inform, register successfully', async function () {
    await testController.expect(registerPage.register.verifyRegisterSuccess().exists).ok();
    await testController.click(registerPage.register.close());
});

Then('the system not should be register', async function () {
    await testController.expect(registerPage.register.verifyRegisterSuccess().visible).notOk();
});

When('I inform a wrong email',async function () {
    await testController.typeText(registerPage.register.emailInput(),randonFakeData.name);
});