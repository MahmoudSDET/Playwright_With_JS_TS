import { expect } from '@playwright/test';
import { step } from 'allure-js-commons';

export class SoftAssertions {
  private errors: string[] = [];

  async softExpect(callback: () => Promise<void>, message?: string) {
    try {
      await callback();
      await step(`✅ ${message || 'Soft assertion passed'}`, async () => {});
    } catch (e: any) {
      const errMsg = message ? `${message}: ${e.message}` : e.message;
      this.errors.push(errMsg);
      console.error(`❌ Soft assertion failed: ${errMsg}`);
      await step(`❌ ${errMsg}`, async () => {
        throw new Error(errMsg);
      });
    }
  }

  async softExpectEqual(actual: any, expected: any, message?: string) {
    try {
      expect(actual).toEqual(expected);
      await step(`✅ ${message || 'Equal assertion passed'}`, async () => {});
    } catch (e: any) {
      const errMsg = message ? `${message}: ${e.message}` : e.message;
      this.errors.push(errMsg);
      console.error(`❌ Soft assertion failed: ${errMsg}`);
      await step(`❌ ${errMsg}`, async () => {
        throw new Error(errMsg);
      });
    }
  }

  assertAll() {
    if (this.errors.length > 0) {
      throw new Error(
        `\n❌ Soft assertion failures:\n${this.errors.join('\n')}`
      );
    } else {
      console.log("✅ All soft assertions passed successfully!");
    }
  }
}