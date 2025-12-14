import {test, expect} from '@playwright/test'
//import { SoftAssertions } from '../../../utils_ts/SoftAssertions';
import { SoftAssertions } from '../../utils_ts/SoftAssertions';

 const softAssert = new SoftAssertions();
test.only('Visible/Hidden Assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
   const isHidden = await page
  .locator('[placeholder="Hide/Show Example"]')
  .isVisible()
  await softAssert.softExpect(
  isHidden,
  'Verify Hide/Show Example input is hidden'
);

    const isVisibleInitial = await page.locator('[placeholder="Hide/Show Example"]').isVisible();
    softAssert.softExpect(isVisibleInitial, 'Check initial visibility');

    const isVisibleAfterLoad = await page.locator('[placeholder="Hide/Show Example"]').isVisible();
    softAssert.softExpect(isVisibleAfterLoad, 'Check visibility after load');

    await page.locator('#hide-textbox').click();
    const isHiddenAfterClick = !(await page.locator('[placeholder="Hide/Show Example"]').isVisible());
    softAssert.softExpect(isHiddenAfterClick, 'Check hidden after click');

    await page.locator('#show-textbox').click();
    const isVisibleAfterShow = await page.locator('[placeholder="Hide/Show Example"]').isVisible();
    softAssert.softExpect(isVisibleAfterShow, 'Check visible after show');

     await softAssert.assertAll();
    await page.close();
})




test('Text Match/Mismatch Assertion',async({page})=>{
    await page.goto('https://letcode.in/buttons');
    const colorText = await page.locator('[id="color"]').textContent();
    softAssert.softExpect(colorText === 'What is my color??', 'Check title');
    softAssert.softExpect(colorText !== 'abcd', 'Check not abcd');
    await softAssert.assertAll();
    await page.close();
})

test('Present/Not Present Assertion',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.locator('button[onclick="addElement()"]').click();
    const countAfterAdd = await page.locator('.added-manually').count();
    softAssert.softExpectEqual(countAfterAdd , 1, 'Check count after add');

    await page.locator('button[onclick="addElement()"]').click();
    const countAfterSecondAdd = await page.locator('.added-manually').count();
    softAssert.softExpect(countAfterSecondAdd === 2, 'Check count after second add');

    await softAssert.assertAll();
    await page.close();
})





