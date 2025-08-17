
const {  When, Given,Then } = require("@cucumber/cucumber")

let poManager; 
exports.poManager = poManager;

const {expect} = require('@playwright/test');
 const {POManager} = require('../../../pageobjects/POManager');
const assert = require("assert")

 Given('a login to Ecommerce application with {string} and {string}', {timeout: 100 * 1000}, async function (username,password) {
      poManager = new POManager(this.page);
    //js file- Login js, DashboardPage
     const products = this.page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
   
    });
  When('Add {string} to Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
     this.dashboardPage = poManager.getDashboardPage();
     await this.dashboardPage.searchProductAddCart(productName);
     await this.dashboardPage.navigateToCart();
  });

  Then('Verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.cartPage = poManager.getCartPage();
    await this.cartPage.VerifyProductIsDisplayed(productName);
  });

  When('Enter valid details and Place the Order', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(this.orderId);
  });

    Then('Verify order is present in the OrderHistory', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(this.orderId);
   expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });

 




  


     
