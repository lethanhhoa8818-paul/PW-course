import { test, expect } from '@playwright/test';

test('Ex3', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // click text Bài học 4 : Personal Notes
  await page.locator("//a[@href='04-xpath-personal-notes.html']").click();

  // Thêm mới 10 notes có nội dung là tiêu đề sau đây : 
  //   => note 1
  const arr = [{action: "click", descripton: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"},
    {action: "fill", descripton: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"},
    {action: "type", descripton: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"},
    {action: "hover", descripton: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"},
    {action: "check", descripton: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"},
    {action: "uncheck", descripton: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"},
    {action: "selectOption", descripton: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"},
    {action: "press", descripton: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"},
    {action: "dblclick", descripton: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"},
    {action: "dragAndDrop", descripton: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"},
  ]
  for (let i = 0; i < arr.length; i++){
    await page.locator("//input[@id='note-title']").fill(arr[i]?.action);
    await page.locator("//textarea[@id='note-content']").fill(arr[i]?.descripton);
    await page.locator("//button[@id='add-note']").click();
  }

// thực hiện search với keyword" một hoặc nhiều"

await page.locator("//input[@id='search']").fill("một hoặc nhiều");

});
