import { test, expect } from '@playwright/test';

test('Handling Webtable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    // Total Rows and Columns
    const columns = table.locator('tr th');
    console.log("Number of Columns : ", await columns.count());

    const rows = table.locator('tbody tr');
    console.log("Number of Rows : ", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(7);

    await page.close();
})

test('Selecting Single Checkbox in the Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })
    await matchedRow.locator('input').check();
    await page.close();
})

test('Selecting Multiple Checkbox using function', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const rows = table.locator('tbody tr');

    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');
    await page.close();
})

async function selectProduct(rows, page, productName) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    });
    await matchedRow.locator('input').check();
}

test('Printing all items from Page1 in Pagination table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const rowData = row.locator('td');
        for (let j = 0; j < await rowData.count(); j++) {
            const cellContent = await rowData.nth(j).textContent();
            console.log(cellContent)
        }
    }
    await page.close();
})

test('Printing all items from all pages Pagination table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log('Total number of Pages : ' + totalPages);

    for (let p = 0; p < totalPages; p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const rowData = row.locator('td');
            for (let j = 0; j < await rowData.count(); j++) {
                const cellContent = await rowData.nth(j).textContent();
                console.log(cellContent)
            }
        }
    }
    await page.close();
})

test('Selecting Multiple after searching using Pagination in case the products are not in the first page', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator('#productTable');
  const pages = page.locator('#pagination li a');
  const totalPages = await pages.count();
 await page.pause();
  console.log('Total number of pages:', totalPages);

  const searchedProducts = ['Smartphone', 'Television', 'Router'];
   let foundCurrentProduct  : number= 0;
  // Loop through all pages
  for (let p = 0; p < totalPages; p++) {
    // Wait for table to be visible on each page
    await table.waitFor();

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();

    console.log(`Checking page ${p + 1} with ${rowCount} rows`);

    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);

      // Assuming product name is in the 2nd column (index 1)
      const productName = (await row.locator('td').nth(1).textContent())?.trim();

      if (productName && searchedProducts.includes(productName)) {
        console.log(`Selecting checkbox for product: ${productName}`);
        await row.locator('input[type="checkbox"]').check();
        foundCurrentProduct++
      }
    }

    // Click next page if not on the last one
    if (p < totalPages - 1 && searchedProducts.length !== foundCurrentProduct) {
      await pages.nth(p + 1).click();
      await page.waitForLoadState('networkidle'); // wait for table to reload
    }else{
        break; // Exit if all products are found
    }
  }
});
