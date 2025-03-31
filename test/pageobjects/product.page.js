const Page = require('./page');

class ProductPage extends Page {
    get categoryPhones() {
        return $('=Phones');
    }

    get categoryLaptops() {
        return $('=Laptops');
    }

    get categoryMonitors() {
        return $('=Monitors');
    }

    get firstProduct() {
        return $('.card-title');
    }

    get addToCartBtn() {
        return $('.btn-success');
    }

    // Functions

    async selectCategory(name) {
        await $(`a=${name}`).click();
    }

    async selectFirstProduct() {
        await this.firstProduct.click();
    }

    async selectProduct(productName) {
        await $(`a.card-title=${productName}`).click();
    }

    async selectAddToCart() {
        await this.addToCartBtn.click();
        await browser.pause(500);
        await browser.acceptAlert();
    }

    open() {
        return super.open('');
    }
}

module.exports = new ProductPage();
