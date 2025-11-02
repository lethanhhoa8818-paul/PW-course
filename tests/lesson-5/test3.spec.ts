
import { test, expect } from '@playwright/test';

test('Ex3', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // click text Bài học 3 : Todo Page
  await page.locator("//a[@href='03-xpath-todo-list.html']").click();

  // Thêm mới 100 todo item
  const todos = [];
  for (let i = 1; i <= 100; i++) {
    await page.locator("//input[@id='new-task']").fill(`todo ${i}`);
    await page.locator("//button[@id='add-task']").click();
    todos.push(`todo ${i}`);
  }
  console.log("Đã thêm:", todos.length, "todo");

  // Xóa các todo có số lẻ
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      const todoLocator = page.locator(`text=todo ${i}`);
      const deleteButton = todoLocator.locator("//button[@id='todo-1-delete']");
    //  await deleteButton.locator("//button[@id='todo-1-delete']").click();    ĐOẠN NÀY BỊ LỖI TIMEOUT 30000ms, NHỜ THÁI SUPPORT GIÚP MÌNH VỚI...        
      console.log(`Đã xóa todo ${i}`);
    }
  }
});

