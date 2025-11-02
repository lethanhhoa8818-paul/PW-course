import { test, expect } from '@playwright/test';

test('Ex1', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

// click text Bài học 1 : Register Page (có đủ các element)
  await page.locator("//a[@href='01-xpath-register-page.html']").click();

// Nhập đầy đủ các thông tin ở các textbox
  await page.locator("//input[@id='username']").pressSequentially("Lê Thanh Hòa"),{
    delay: 300
  };
  await page.locator("//input[@id='email']").fill("lethanhhoa8818@gmail.com");
  await page.locator("//textarea[@id='bio']").fill("Member of Better Bytes");

// click button Register
  await page.locator("//button[@type='submit']").click();

});