// 1.
let object = {
    name : "Nasir", 
    age : 20, 
    grade : "A+"
}
console.log(object.name)
console.log(object["grade"])


// 2.
let car = {
    brand : "Toyota", 
    model : 21,
    year : 21
}
let prop = "model"
console.log(car[prop])


// 3.
let book = {
    title : "Think and grow rich", 
    author : "john doe"
}
book.author = "john"
console.log(book)
book.year = 2011
console.log(book)