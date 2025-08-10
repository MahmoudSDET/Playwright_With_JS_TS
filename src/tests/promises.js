import { chromium } from 'playwright';

chromium.launch({ headless: true })
  .then(browser => browser.newContext()
    .then(context => context.newPage()
      .then(page => page.goto('https://example.com')
        .then(() => page.textContent('h1'))
        .then(text => console.log('Heading:', text))
        .then(() => browser.close())
      )
    )
  )
  .catch(err => console.error('Error:', err));

  //using async/await
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://example.com');
  const text = await page.textContent('h1');
  console.log('Heading:', text);
  
  await browser.close();
})().catch(err => console.error('Error:', err));
   