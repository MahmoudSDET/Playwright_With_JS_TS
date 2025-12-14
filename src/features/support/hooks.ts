
import {
  Before,
  After,
  AfterStep,
  Status,
  setDefaultTimeout,
  BeforeAll,
  AfterAll
} from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { CustomWorld } from './world';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { retryState } from "./retryState";
import { shouldRetry } from "./retryPolicy";

setDefaultTimeout(60 * 1000);
const executionFile = path.resolve('test-result/execution-time.json');

BeforeAll(() => {
  fs.mkdirSync('test-result', { recursive: true });

  const data = {
    startTime: new Date().toISOString(),
    environment: process.env.ENV || 'QA',
    executedBy: process.env.CI ? 'CI' : os.userInfo().username,
    platform: `${os.platform()} ${os.release()}`
  };

  fs.writeFileSync(executionFile, JSON.stringify(data, null, 2));
});
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

After(async function (this: CustomWorld, { result, pickle }) {
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

AfterAll(async function () {

   const existing = JSON.parse(fs.readFileSync(executionFile, 'utf-8'));

  const endTime = new Date();

  const data = {
    ...existing,
    endTime: endTime.toISOString(),
    durationSeconds: Math.floor(
      (endTime.getTime() - new Date(existing.startTime).getTime()) / 1000
    )
  };

  fs.writeFileSync(executionFile, JSON.stringify(data, null, 2));
   
});
