const { $ } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    
    get inputUsername () {
        return $('#loginusername');
    }

    get inputPassword () {
        return $('#loginpassword');
    }

    get btnSubmit () {
        return $('button[onclick="logIn()"]');
    }

    get openLoginModal () {
        return $('#login2');
    }

    get welcomeText () {
        return $('#nameofuser');
    }

   
    async login(username, password) {
        await this.openLoginModal.scrollIntoView();
        await browser.pause(300); 
        await browser.execute((el) => el.click(), await this.openLoginModal);

        await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);

        await this.btnSubmit.waitForClickable({ timeout: 5000 });
        await this.btnSubmit.click();

        await this.welcomeText.waitForDisplayed({ timeout: 10000 });
    }

  
    open () {
        return super.open('/');
    }
    
}

module.exports = new LoginPage();
