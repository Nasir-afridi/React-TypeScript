//1.
let fruits = ["Apple", "banana", "Mango"]
fruits.push("watermelon")
fruits.pop("watermelon")
console.log(fruits)

//2.
let arr = [1, 2, 3, 4, 5, 6]
let result = arr.filter((even) => even % 2 === 0)
console.log(result)

//3.
let square = [2, 4, 6]
let sqr = square.map((sqr) => sqr * sqr)
console.log(sqr)

//4.
let red = [10, 20, 30, 40]
let res = red.reduce((acc, curr) => acc + curr)
console.log(res)