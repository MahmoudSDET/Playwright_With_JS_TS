import { test, expect } from '@playwright/test';



test.beforeEach(async ({ context }) => {
  try {
    await context.tracing.stop();
  } catch (e) {
    // لو ماكانش شغال أصلاً، تجاهل الخطأ
  }
  await context.tracing.start({ screenshots: true, snapshots: true });
});

test.afterEach(async ({ context }, testInfo) => {
  await context.tracing.stop({ path: `trace-${testInfo.title}.zip` });
});

test('test', async ({ page, context }) => {

  await page.goto('https://react-redux.realworld.io/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('playwrightdemo@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('playwrightdemo');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Global Feed' }).click();
  await page.getByRole('link', { name: ' Settings' }).click();
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();

});