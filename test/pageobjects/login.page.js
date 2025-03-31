const Page = require('./page');

class LoginPage extends Page {
    get openLoginModalBtn() {
        return $('#login2');
    }

    get inputUsername() {
        return $('#loginusername');
    }

    get inputPassword() {
        return $('#loginpassword');
    }

    get loginBtn() {
        return $('button[onclick="logIn()"]');
    }

    get welcomeText() {
        return $('#nameofuser');
    }

    // Functions

    async openLoginModal() {
        await this.open('/'); // Opens homepage
        await this.openLoginModalBtn.click();
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();
