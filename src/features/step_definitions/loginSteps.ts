import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { POManager } from '../../../pageobjects_ts/POManager';

let poManager: POManager;

Given('User is on Login Page', { timeout: 100 * 1000 }, async function (this: any) {
    poManager = new POManager(this.page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
});

When('User enters valid username and password', async function (this: any) {
    const loginPage = poManager.getLoginPage();
    await loginPage.userName.fill("mahmoud.abdelfattah.sdet@gmail.com");
    await loginPage.password.fill("P@ssw0rd");
});

When('User clicks on the login button', async function (this: any) {
    const loginPage = poManager.getLoginPage();
    await loginPage.signInbutton.click();
    await this.page.waitForLoadState('networkidle');
});

Then('User should be redirected to the Dashboard page', async function (this: any) {
    const dashboardPage = poManager.getDashboardPage();
    await expect(dashboardPage.orders).toBeVisible();
});