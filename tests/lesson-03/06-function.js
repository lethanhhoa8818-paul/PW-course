// Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
// Định nghĩa hàm multiply
function multiply ( i, j){
   return i * j
}
// console.log(multiply(3, 6))
// console.log(multiply(10, 20))

// Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

function findMin (a, b, c){
    let min = a
    if (min > b)
        min = b
    if (min > c)
        min = c
    return min
}
// console.log(findMin(1, 2, 3))
// console.log(findMin(3, 2, 1))
// console.log(findMin(1, 3, 2))
// console.log(findMin(2, 3, 1))
// console.log(findMin(2, 1, 3))

let students = [
  { name: "Nam", score: 85 },
  { name: "Hòa", score: 72 },
  { name: "Nhân", score: 91 },
  { name: "Châu", score: 65 }
];

function getTopStudents (students , threshold){
let stu =[]
    for (let i = 0; i < students.length; i++){
    if (students[i].score >= threshold)
        stu.push(students[i])
}
return stu;
}
// console.log (getTopStudents(students, 80)) (Viết hàm trả về số topStudent > 80 điểm)

function calculateInterest (principal, rate, years){
    let total = principal + (principal * rate * years) / 100;
    return total
}
let result = calculateInterest (5000000, 4.58, 3)
// console.log ("Tổng tiền sau 3 năm gởi là:", result) (Viết hàm trả về tổng số tiền gởi nhận được sau 3 năm)
