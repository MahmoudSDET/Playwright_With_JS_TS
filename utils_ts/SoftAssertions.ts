
import { step } from 'allure-js-commons';

export class SoftAssertions {
     private errors: string[] = [];

  async softExpect(condition: boolean, message: string) {
    if (condition) {
      await step(`✅ ${message}`, async () => {});
      return;
    }

    const errMsg = `❌ ${message}`;
    this.errors.push(errMsg);

    await step(errMsg, async () => {});
    console.error(errMsg);
  }

  async softExpectEqual(actual: any, expected: any, message: string) {
    const condition = actual === expected;

    if (condition) {
      await step(`✅ ${message}`, async () => {});
      return;
    }

    const errMsg = `❌ ${message} | expected: ${expected}, actual: ${actual}`;
    this.errors.push(errMsg);

    await step(errMsg, async () => {});
    console.error(errMsg);
  }

  assertAll() {
    if (this.errors.length > 0) {
      const error = this.errors.join('\n');
      this.errors = []; // 🔥 مهم جدًا
      throw new Error(`\nSoft assertion failures:\n${error}`);
    }

    console.log('✅ All soft assertions passed successfully!');
    this.errors = [];
  }

  clear() {
    this.errors = [];
  }

}