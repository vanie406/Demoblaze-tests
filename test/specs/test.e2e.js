const signupPage = require('../pageobjects/signup.page');
const loginPage = require('../pageobjects/login.page');
const productPage = require('../pageobjects/product.page');
const cartPage = require('../pageobjects/cart.page');

describe('E2E Test in DemoBlaze', () => {
    const username = `user_${Date.now()}`;
    const password = 'zxc123';

    it('should signup with unique username', async () => {
        await browser.url('/');

        // Open sign up modal
        await $('#signin2').click();
        await $('#signInModal').waitForDisplayed();

        // Fill in credentials
        await $('#sign-username').setValue(username);
        await $('#sign-password').setValue(password);

        // Submit sign up
        await $('button[onclick="register()"]').click();

        // Wait for possible signup "notification"
        await browser.waitUntil(async () => {
            const elements = await $$('div, span, p');
            for (const el of elements) {
                if (await el.isDisplayed()) {
                    const text = await el.getText();
                    if (text.toLowerCase().includes('sign up') || text.toLowerCase().includes('already exist')) {
                        console.log('Notification:', text);
                        return true;
                    }
                }
            }
            return false;
        }, {
            timeout: 5000,
            timeoutMsg: 'Expected signup notification to appear'
        });

        // Close modal if visible
        const closeBtn = await $('#signInModal .btn-secondary');
        if (await closeBtn.isDisplayed()) {
            await closeBtn.click();
        }
    });

    it('should login with the same credentials', async () => {
        await browser.url('/');
        await $('#login2').click();
        await $('#logInModal').waitForDisplayed();

        await loginPage.login(username, password);

        await $('#nameofuser').waitForDisplayed({ timeout: 5000 });
        const welcomeText = await $('#nameofuser').getText();
        expect(welcomeText).toContain(username);
    });

    it('should select multiple products from categories', async () => {
        await browser.url('/');
        
        // Select Phone
        await productPage.selectCategory('Phones');
        await browser.waitUntil(async () => {
            const items = await $$('a.card-title');
            return items.length > 0;
        }, { timeout: 5000, timeoutMsg: 'Phones did not load in time' });
        await productPage.selectProduct('Samsung galaxy s6');
        await productPage.addToCart();

        // Go back and select Laptop
        await browser.url('/');
        await productPage.selectCategory('Laptops');
        await browser.waitUntil(async () => {
            const items = await $$('a.card-title');
            return items.length > 0;
        }, { timeout: 5000, timeoutMsg: 'Laptops did not load in time' });
        await productPage.selectProduct('Sony vaio i5');
        await productPage.addToCart();
    });
});
