import { test, expect } from '@playwright/test';

test('Navigate to automationexercise.com and verify login page', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto('https://www.automationexercise.com/');

  // Step 2: Click on Signup/Login
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // Step 3: Verify the URL contains "login"
  await expect(page).toHaveURL(/login/);
});
