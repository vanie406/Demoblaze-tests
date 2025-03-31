const Page = require('./page'); // ✅ Import your base Page class

class SignupPage extends Page {
    get openSignupModalBtn() {
        return $('#signin2');
    }

    get inputUsername() {
        return $('#sign-username');
    }

    get inputPassword() {
        return $('#sign-password');
    }

    get signupBtn() {
        return $('button[onclick="register()"]');
    }

    async openSignupModal() {
        await this.open('/'); // ✅ Loads homepage
        await this.openSignupModalBtn.click();
    }

    async signup(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signupBtn.click();
    }
}

module.exports = new SignupPage(); // ✅ Export the instance
