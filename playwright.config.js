import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests', // مسار التستات
  testMatch: ['**/*.spec.{js,ts}', '**/*.test.{js,ts}'], // أنواع الملفات
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  // عدد التستات اللي يشتغلوا في نفس الوقت
  fullyParallel: false,

  // لو عملت test.only بالغلط
  forbidOnly: !!process.env.CI,

  // يعمل retry في CI
  retries: process.env.CI ? 2 : 0,

  // عدد workers
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['list'], // report عادي
    ['allure-playwright'], // report Allure
  ],

  use: {
    baseURL: 'https://rahulshettyacademy.com',
    trace: 'on-first-retry', // Tracing في حالة failure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
