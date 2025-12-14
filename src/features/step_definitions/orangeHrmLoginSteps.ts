import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the orange hrm login page', async function () {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
});

When('I login with username as {string} and password as {string}', async function (username: string, password: string) {
    await this.page.locator('input[placeholder="Username"]').fill(username);
    await this.page.locator('input[placeholder="Password"]').fill(password);
});

When('I click on the login button', async function () {
    await this.page.locator('button[type="submit"]').click();
});

Then('I route to the orange hrm home page', async function () {
    await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});