"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
// example of using Playwright with promises
playwright_1.chromium.launch({ headless: false })
    .then(browser => browser.newContext()
    .then(context => context.newPage()
    .then(page => page.goto('https://testautomationpractice.blogspot.com/')
    .then(() => page.textContent('h1'))
    .then(text => console.log('Heading:', text))
    .then(() => browser.close()))))
    .catch(err => console.error('Error:', err));
// Not recommended for readability — use async/await instead.
console.log("-----------------------------------------------------");
// example of Playwright with chainning promises
function handleError(err) {
    console.error('Error:', err);
}
function closeBrowser(browser) {
    return browser.close();
}
function extractHeading(page, browser) {
    return page.textContent('h1')
        .then((text) => {
        console.log('Heading:', text);
    })
        .then(() => closeBrowser(browser));
}
function navigateToPage(page, browser) {
    return page.goto('https://testautomationpractice.blogspot.com/')
        .then(() => extractHeading(page, browser));
}
function createPage(context, browser) {
    return context.newPage()
        .then((page) => navigateToPage(page, browser));
}
playwright_1.chromium.launch({ headless: true })
    .then((browser) => browser.newContext()
    .then((context) => createPage(context, browser)))
    .catch(handleError);
console.log("-----------------------------------------------------");
// example of using Playwright with async/await with an IIFE (Immediately Invoked Function Expression)
// This is a common pattern to avoid polluting the global scope with async functions.
(async () => {
    const browser = await playwright_1.chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    const text = await page.textContent('h1');
    console.log('Heading:', text);
    await browser.close();
})().catch(err => console.error('Error:', err));
console.log("-----------------------------------------------------");
// example of using Playwright with async/await with named function
async function openTestAutomationPractice() {
    try {
        const browser = await playwright_1.chromium.launch({ headless: true });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://testautomationpractice.blogspot.com/');
        const text = await page.textContent('h1');
        console.log('Heading:', text);
        await browser.close();
    }
    catch (err) {
        console.error('Error:', err);
    }
}
// ✅ Call the method explicitly
openTestAutomationPractice();
//# sourceMappingURL=playwrightWithPromises.js.map