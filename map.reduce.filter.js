const students = [
    { name: "Anas", grade: 85, passed: true },
    { name: "Sara", grade: 45, passed: false },
    { name: "Ali", grade: 72, passed: true },
    { name: "Grace", grade: 30, passed: false },
    { name: "Omar", grade: 91, passed: true }
];


const result = students.filter((student) => student.passed)
const result2 = result.map((student) => student.name)
const total = students.reduce((sum, current) => sum+ current.grade, 0 )
const average = total/students.length

console.log(result)
console.log(result2)
console.log(average)


const products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Phone", price: 599, inStock: false },
    { name: "Tablet", price: 399, inStock: true },
    { name: "Watch", price: 199, inStock: false },
    { name: "Earbuds", price: 149, inStock: true }
];

const totalCost = products.filter((product) => product.inStock).map((discount) => discount.price*(1 - 10/100)).reduce((sum, discount) => sum + discount, 0)
//const stock1 = stock.
//const totalCost = stock1

//console.log(stock)
//console.log(stock1)
console.log(totalCost)