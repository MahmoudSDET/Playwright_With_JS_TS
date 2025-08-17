const { Before, After, AfterStep, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  console.log("🚀 Launching browser before scenario...");
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    console.log("❌ Step failed, capturing screenshot...");
    const screenshot = await this.page.screenshot({ path: 'screenshot-failure.png' });
    this.attach(screenshot.toString('base64'), 'base64:image/png');
  }
});

After(async function () {
  console.log("🛑 Closing browser after scenario...");
  if (this.browser) {
    await this.browser.close();
  }
});
