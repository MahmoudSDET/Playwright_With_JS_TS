const { test, expect } = require('@playwright/test');
const ExcelUtils = require('../utils/ExcelUtils');

test('Upload and validate updated Excel file', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '600';
  let filePath, updatedRow;

  await test.step('📥 Navigate and download Excel file', async () => {
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download" }).click();
    const download = await downloadPromise;
    filePath = await ExcelUtils.saveDownloadAndGetPath(download, "download.xlsx");
    console.log(`✅ File downloaded to: ${filePath}`);
  });

  await test.step('✏️ Update Excel file with new value', async () => {
    updatedRow = await ExcelUtils.updateCellBySearchAndHeader(filePath, 'Sheet1', textSearch,'price',updateValue);
    console.log(`✅ Updated "${textSearch}" to "${updateValue}" in row ${updatedRow}`);
  });
 
  await test.step('📖 Verify updated value from Excel file', async () => {
    const { value } = await ExcelUtils.readExcelByHeader(filePath, 'Sheet1', 'price', updatedRow);
    console.log(`📌 Price in row ${updatedRow}: ${value}`);
    expect(value).toBe(updateValue);
  });

  await test.step('📤 Upload modified Excel file', async () => {
    await page.setInputFiles("#fileinput", filePath);
  });

  await test.step('🔍 Validate updated value in UI', async () => {
    const textLocator = page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({ has: textLocator });
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
  });

  
});
