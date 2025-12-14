import { When, Given, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';

let poManager: any;

Given('a login to Ecommerce2 application with {string} and {string}', { timeout: 100 * 1000 }, async function (this: any, username: string, password: string) {

    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    const userName = this.page.locator('#username');
    const signIn = this.page.locator("#signInBtn");
   // const cardTitles = this.page.locator(".card-body a");
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    //css
    await userName.fill("rahulshetty");
    await this.page.locator("[type='password']").fill("learning");
    await signIn.click();
});


Then('Verify Error message is displayed', async function (this: any) {
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});
