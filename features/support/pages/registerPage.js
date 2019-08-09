const {Selector} = require('testcafe');
const randonFakeData = require('casual');

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}
exports.register= {
    url: function() {
        return 'http://localhost:3000/';
    },
    loginInput: function() {
        return Selector('#login');
    },
    passswordInput: function() {
        return Selector('#password');
    },
    emailInput: function() {
        return Selector('#email');
    },
    nameInput: function() {
        return Selector('#name');
    },
    addressInput: function() {
        return Selector('#address');
    },
    addressDetailsInput: function() {
        return Selector('#address-details');
    },
    educationTechnician: function() {
        return Selector('label').withText('Technician');
    },
    educationBachelorsDegree: function() {
        return Selector('label').withText('Bachelor');
    },
    educationMasterDegree: function() {
        return Selector('label').withText('Master');
    },
    educationDoctorateDegree: function() {
        return Selector('label').withText('Doctorate');
    },
    educationHighlander: function() {
        return Selector('label').withText('Highlander');
    },
    courseSelect: function() {
        return Selector('#qa-select');
    },
    submit: function() {
       return Selector('#btn-save');
    },
    close: function() {
        return Selector('button').withText('close')
    },
    verifyRegisterSuccess: function() {
        return Selector('span#message').with({boundTestRun: testController});
    },

    async selectEducation(education){
        switch (education) {
            case 'Technician':
                await testController.click(this.educationTechnician());
              break;
            case 'Bachelor':
                await testController.click(this.educationBachelorsDegree());
              break;
            case 'Master':
                await testController.click(this.educationMasterDegree());
              break;
            case 'Doctorate':
                await testController.click(this.educationDoctorateDegree());
              break;
            case 'Highlander':
                await testController.click(this.educationHighlander());
              break;
            }
        },
    async selectCourse(course) {
        await testController.click(this.courseSelect());
        await testController.click(await Selector('option').withText(course));
    }
}
    