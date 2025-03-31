const Page = require('./page');

class CartPage extends Page {
    get cartLink() {
        return $('.cart');
    }

    get productList() {
        return $$('.success');
    }

    get placeOrderBtn() {
        return $('.btn-success');
    }

    // Functions

    async selectCartLink() {
        await this.cartLink.click();
    }

    async isProductInCart(productName) {
        const rows = await this.productList;
        for (let row of rows) {
            const text = await row.getText();
            if (text.includes(productName)) return true;
        }
        return false;
    }

    open() {
        return super.open('cart.html');
    }
}

module.exports = new CartPage();
