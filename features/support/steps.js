const { Given, When, Then, Before, After } = require("cucumber");

Before(async function() {
    return await this.launchBrowser();
});

After(async function() {
    return await this.closeBrowser();
})

Given('I open the login page', async function() {
    return await this.visit();
});

When('I fill the login form', async function() {
    return await this.fillLoginForm();
});

When('I click on submit button', async function() {
    return await this.submitLogin();
});

Then('I expect to see the application content', async function() {
    return await this.verifySuccessfulLogin();
});
