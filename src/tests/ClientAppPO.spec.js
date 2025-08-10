"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const test_base_1 = require("../utils_ts/test-base");
const POManager_1 = require("../pageobjects_ts/POManager");
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));
for (const data of dataset) {
    (0, test_1.test)(`@Webs Client App login for ${data.productName}`, async ({ page }) => {
        const poManager = new POManager_1.POManager(page);
        //js file- Login js, DashboardPage
        const products = page.locator(".card-body");
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productName);
        await dashboardPage.navigateToCart();
        const cartPage = poManager.getCartPage();
        await cartPage.VerifyProductIsDisplayed(data.productName);
        await cartPage.Checkout();
        const ordersReviewPage = poManager.getOrdersReviewPage();
        await ordersReviewPage.searchCountryAndSelect("ind", "India");
        let orderId;
        orderId = await ordersReviewPage.SubmitAndGetOrderId();
        console.log(orderId);
        await dashboardPage.navigateToOrders();
        const ordersHistoryPage = poManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(orderId);
        (0, test_1.expect)(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    });
}
(0, test_base_1.customTest)(`Client App login`, async ({ page, testDataForOrder }) => {
    const poManager = new POManager_1.POManager(page);
    //js file- Login js, DashboardPage
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();
});
//test files will trigger parallel
//individual tests in the file will run in sequence
//# sourceMappingURL=ClientAppPO.spec.js.map