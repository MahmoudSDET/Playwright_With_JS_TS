import { chromium } from 'playwright';
// example of using Playwright with promises
chromium.launch({ headless: false })
  .then(browser => browser.newContext()
    .then(context => context.newPage()
      .then(page => page.goto('https://testautomationpractice.blogspot.com/')
        .then(() => page.textContent('h1'))
        .then(text => console.log('Heading:', text))
        .then(() => browser.close())
      )
    )
  )
  .catch(err => console.error('Error:', err));
// Not recommended for readability — use async/await instead.

console.log("-----------------------------------------------------");
// example of Playwright with chainning promises
function handleError(err: any) {
  console.error('Error:', err);
}

function closeBrowser(browser: any) {
  return browser.close();
}

function extractHeading(page: any, browser: any) {
  return page.textContent('h1')
    .then((text: string) => {
      console.log('Heading:', text);
    })
    .then(() => closeBrowser(browser));
}

function navigateToPage(page: any, browser: any) {
  return page.goto('https://testautomationpractice.blogspot.com/')
    .then(() => extractHeading(page, browser));
}

function createPage(context: any, browser: any) {
  return context.newPage()
    .then((page: any) => navigateToPage(page, browser));
}

chromium.launch({ headless: true })
  .then((browser: any) =>
    browser.newContext()
      .then((context: any) => createPage(context, browser))
  )
  .catch(handleError);

console.log("-----------------------------------------------------");
// example of using Playwright with async/await
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://testautomationpractice.blogspot.com/');
  const text = await page.textContent('h1');
  console.log('Heading:', text);
  await browser.close();
})().catch(err => console.error('Error:', err));
console.log("-----------------------------------------------------");

// example of using Playwright with async/await with named function
async function openTestAutomationPractice() {
  try {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');
    const text = await page.textContent('h1');
    console.log('Heading:', text);

    await browser.close();
  } catch (err) {
    console.error('Error:', err);
  }
}

// ✅ Call the method explicitly
openTestAutomationPractice();