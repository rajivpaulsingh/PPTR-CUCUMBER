const puppeteer = require('puppeteer');
const { expect } = require('chai');
const { setWorldConstructor } = require('cucumber');

class CustomWorld {

    async launchBrowser() {
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await browser.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/index.html");
    }

    async filleLoginForm() {
        await this.page.waitForSelector('#login_form');
        await this.page.type('#user_login', 'username');
        await this.page.type('#user_password', 'password');
    }

    async submitLogin() {
        await this.page.click('.btn-primary');
    }

    async verifySuccessfulLogin() {
        await this.page.waitForSelector('#account_summary_tab');
    }
}

setWorldConstructor(CustomWorld);