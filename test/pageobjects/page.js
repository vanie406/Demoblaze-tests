class Page {
    /**
     * Open a subpage using a relative path.
     * @param {string} path - The part after the main domain, like "login" or "cart.html"
     */
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }

    /**
     * Wait for an element to be displayed.
     * This is optional but helpful if you plan to reuse wait logic.
     * @param {string} selector - CSS selector for the element
     * @param {number} timeout - Optional timeout in ms (default: 5000)
     */
    async waitForDisplayed(selector, timeout = 5000) {
        await $(selector).waitForDisplayed({ timeout });
    }

    /**
     * Pause execution for debugging or intentional delay
     * @param {number} time - Time to pause in ms
     */
    async pause(time = 1000) {
        await browser.pause(time);
    }
}

module.exports = Page;

