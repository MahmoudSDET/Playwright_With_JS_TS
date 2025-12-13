import {
  Before,
  After,
  AfterStep,
  Status,
  setDefaultTimeout
} from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { CustomWorld } from './world';

setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  console.log('🚀 Launching browser before scenario...');

  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

AfterStep({ timeout: 60000 }, async function (this: CustomWorld, { result }) {
    if (result.status === Status.FAILED && this.page) {
    console.log("❌ Step failed, capturing screenshot...");

    const screenshot = await this.page.screenshot();

    await this.attach(screenshot, 'image/png');
  }
});

After(async function (this: CustomWorld, scenario) {
  console.log('🛑 After hook started');
    try {
      if (this.page && !this.page.isClosed()) {
        await this.page.close();
      }
      if (this.context) {
        await this.context.close();
      }
      if (this.browser) {
        await this.browser.close();
        console.log('✅ Browser closed successfully');
      }
    } catch (e) {
      console.error('⚠️ Error while closing browser:', e);
    }
  
});
