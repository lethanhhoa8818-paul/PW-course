import { test, expect } from '@playwright/test';

test('Ex2', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

// click text Bài học 2 : Product Page
  await page.locator("//a[@href='02-xpath-product-page.html']").click();
// Sản phẩm 1 : 2 sản phẩm
  await page.locator("(//button[@class='add-to-cart'])[1]").dblclick();
// Sản phẩm 2 : 3 sản phẩm
  await page.locator("(//button[@class='add-to-cart'])[2]").dblclick();
  await page.locator("(//button[@class='add-to-cart'])[2]").click();
// Sản phẩm 3 : 1 sản phẩm
  await page.locator("(//button[@class='add-to-cart'])[3]").click();

});