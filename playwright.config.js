const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',         // Your test folder
  timeout: 30 * 1000,             // 30 seconds per test
  expect: {
    timeout: 5000                 // 5 seconds for expect()
  },
  fullyParallel: false,            // Allow tests in the same file to run in parallel
  forbidOnly: !!process.env.CI,   // Prevent .only in CI
  retries: process.env.CI ? 2 : 0,// Retry on CI
  workers: process.env.CI ? 2 : 4,// Number of parallel workers
  reporter: [['list'], ['html']], // HTML + List reporter

  use: {
    browserName: 'chromium',      // chromium, firefox, or webkit
    headless: false,              // Set to true for CI
    screenshot: 'on',             // on, off, only-on-failure
    video: 'retain-on-failure',   // retain-on-failure, on, off
    trace: 'on-first-retry',      // Useful for debugging
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true
  }
});