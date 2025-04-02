const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('E2E test for Demoblaze', () => {
    it('should login with valid credentials', async () => {
        await browser.url('/');
        await LoginPage.login('loreen12', 'zxc123')
        const welcomeText = await LoginPage.welcomeText.getText();
        expect(welcomeText).toContain('loreen12');
    });
});

