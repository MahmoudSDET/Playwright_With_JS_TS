const {  When, Given,Then } = require("@cucumber/cucumber")

let poManager; 
exports.poManager = poManager;

 Given('a login to Ecommerce2 application with {string} and {string}', {timeout: 100 * 1000}, async function (username,password) {
        
        // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
          const userName = this.page .locator('#username');
          const signIn = this.page .locator("#signInBtn");
          const cardTitles =  this.page .locator(".card-body a");
          await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
          console.log(await this.page.title());
          //css 
         await userName.fill("rahulshetty");
         await this.page .locator("[type='password']").fill("learning");
         await signIn.click();   
        });


 Then('Verify Error message is displayed', async function () {
          await expect(this.page .locator("[style*='block']")).toContainText('Incorrect');

 })
