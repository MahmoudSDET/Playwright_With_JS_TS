// src/utils_ts/SoftAssertions.ts


export class SoftAssertions {


private assertions: Array<{ assertion?: () => Promise<void>, condition?: boolean, message: string }> = [];

    softExpect(assertion: () => Promise<void>, message: string): void;
    softExpect(condition: boolean, message: string): void;
    softExpect(conditionOrAssertion: (() => Promise<void>) | boolean, message: string): void {
        if (typeof conditionOrAssertion === 'boolean') {
            this.assertions.push({ condition: conditionOrAssertion, message });
        } else {
            this.assertions.push({ assertion: conditionOrAssertion, message });
        }
    }
 
    //new
    softExpectEqual(actual: any, expected: any, message: string): void {
    const isEqual =
      typeof actual === 'object' && typeof expected === 'object'
        ? JSON.stringify(actual) === JSON.stringify(expected)
        : actual === expected;

    this.assertions.push({
      condition: isEqual,
      message: `${message} | expected: ${JSON.stringify(expected)}, actual: ${JSON.stringify(actual)}`
    });
  }

  async assertAll(): Promise<void> {
    const failures: string[] = [];
    for (const item of this.assertions) {
      if (item.condition !== undefined) {
        if (!item.condition) {
          failures.push(item.message);
        }
      } else if (item.assertion) {
        try {
          await item.assertion();
        } catch (e) {
          failures.push(`${item.message}: ${e}`);
        }
      }
    }
    if (failures.length > 0) {
      throw new Error('Soft assertion failures: ' + failures.join('; '));
    }
  }

}
