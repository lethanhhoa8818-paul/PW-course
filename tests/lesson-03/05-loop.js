// Tính tổng từ 1 đến 100.
let sum=0
for (let i = 1; i <= 100; i++) {
    sum += i;
}

// console.log("Tổng từ 1 đến 100 là:", sum);

// In bảng cửu chương từ 2 đến 9.
for (let j = 2; j <= 9; j++){
    // console.log(`Bảng cửu chương ${j}:`);
for (let i = 1; i <= 10; i++){
    // console.log(`${j} x ${i} = ${i * j}`);
}
}

// Tạo một mảng chứa các số lẻ từ 1 đến 99.
let Number =[

]
for (let i = 1; i <= 99; i++)
if (i % 2 ===1)
Number.push(i)
// console.log(Number)

// In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).
let emails =[

]
for (let i = 1; i <= 10; i++){
    emails.push(`user${i}@example.com`);
}
// console.log(emails)

// Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}
// Mảng doanh thu mẫu của 12 tháng
let revenues = [
  { month: 1, total: 120 },
  { month: 2, total: 100 },
  { month: 3, total: 130 },
  { month: 4, total: 200 },
  { month: 5, total: 180 },
  { month: 6, total: 170 },
  { month: 7, total: 160 },
  { month: 8, total: 210 },
  { month: 9, total: 190 },
  { month: 10, total: 220 },
  { month: 11, total: 230 },
  { month: 12, total: 250 }
];

// Tính tổng doanh thu cả năm
let totalRevenue = 0;

for (let i = 0; i < revenues.length; i++) {
  totalRevenue += revenues[i].total;
}

console.log("Tổng doanh thu năm là:", totalRevenue);
