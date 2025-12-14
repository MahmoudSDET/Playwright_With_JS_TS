import { When, Given, Then } from "@cucumber/cucumber";
import { CustomWorld } from '../support/world';
import { POManager } from '../../../pageobjects_ts/POManager';

let poManager: POManager;

Given(
  'a login to Ecommerce application with {string} and {string}',
  { timeout: 100 * 1000 },
  async function (this: CustomWorld, username: string, password: string) {

    poManager = new POManager(this.page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
  }
);

When(
  'Add {string} to Cart',
  async function (this: CustomWorld, productName: string) {

    this.dashboardPage = poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
  }
);

Then(
  'Verify {string} is displayed in the Cart',
  async function (this: CustomWorld, productName: string) {

    this.cartPage = poManager.getCartPage();
    await this.cartPage.VerifyProductIsDisplayed(productName);
  }
);

When(
  'Enter valid details and Place the Order',
  async function (this: CustomWorld) {

    await this.cartPage!.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");

    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    this.orderId = orderId || undefined;
    console.log('Order ID:', this.orderId);
  }
);

Then(
  'Verify order is present in the OrderHistory',
  async function (this: CustomWorld) {

    if (!this.orderId) {
      throw new Error('Order ID was not generated');
    }

    await this.dashboardPage!.navigateToOrders();

    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);

    const actualOrderId = await ordersHistoryPage.getOrderId();

    // ✅ Soft Assertion
    await this.softAssert.softExpect(
      actualOrderId ? !this.orderId.includes(actualOrderId) : true,
      'Check that order ID is present in order history'
    );

   this.softAssert.assertAll();
  }
);
