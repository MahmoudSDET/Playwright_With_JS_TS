import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Page, Browser, BrowserContext } from '@playwright/test';
import { SoftAssertions } from '../../utils_ts/SoftAssertions';

export class CustomWorld extends World {
  page!: Page;
  browser!: Browser;
  context!: BrowserContext;

  softAssert: SoftAssertions;

  orderId?: string;
  dashboardPage?: any;
  cartPage?: any;

  constructor(options: IWorldOptions) {
    super(options); // 🔥 ده اللي بيربط attach صح
    this.softAssert = new SoftAssertions();
  }
}

setWorldConstructor(CustomWorld);
