// Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
// Định nghĩa hàm multiply
function multiply(i, j) {
    return i * j
}
// console.log(multiply(3, 6))
// console.log(multiply(10, 20))

// Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

function findMin(a, b, c) {
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

function getTopStudents(students, threshold) {
    let stu = []
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold)
            stu.push(students[i])
    }
    return stu;
}
// console.log (getTopStudents(students, 80)) (Viết hàm trả về số topStudent > 80 điểm)

function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate * years) / 100;
    return total
}
let result = calculateInterest(5000000, 4.58, 3)
// console.log ("Tổng tiền sau 3 năm gởi là:", result) (Viết hàm trả về tổng số tiền gởi nhận được sau 3 năm)

const arr = [1, 101, 2, 3, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        // console.log(arr[i]);
        // break;
    }
}

const scores = [85, 92, 78, 95, 60, 88];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
        // console.log(scores[i]);
    }
}
// Khai báo object: student gồm có:
// Name
// Address
// In ra tên và address trên cùng một dòng
arrStu = "";
const student ={
    name : "Nhân",
    Address : "157 Nguyễn Đức Cảnh"
};
for (let key in student){
    arrStu = arrStu + student[key] + " "
};
// console.log(arrStu)

const tuois = [18, 22, 40, 56, 100];
const newtuoi = tuois.map(num => num > 20);

// console.log(newtuoi)
// console.log(tuois)

const number = [1, 2, 3, 4, 5]

const sum = number.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 0);
// console.log(sum)