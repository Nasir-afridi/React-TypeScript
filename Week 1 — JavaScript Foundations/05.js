// 1.
let person = {
    Name : "Nasir",
    year : 2021,
    country : "pakistan"
}
const {Name, year, country} = person
console.log(Name, year, country)


// 2.
let color = ["red", "pink", "Yellow"]
const [a, b, c] = color
console.log(a, b, c)


// 3.
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let final = [...arr1 , ...arr2]
console.log(final)

// 4.
function product(...num) {
    return num.reduce((acc, curr) => acc * curr)
}
console.log(product(2, 3))