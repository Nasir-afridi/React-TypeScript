// 1.
function hello() {
    console.log("welcome to the javascript")
}
hello();


// 2.
const sum = function (a, b) {
    return a + b
}
let result = sum(4, 5)
console.log(result)


// 3.
const cube = (n) => {
    return n * n * n
}
let res = cube(2)
console.log(res)


// 4.
function func() {
    let name = "Nasir"
}
console.log(name)


// 5.
function greet(msg = "friend") {
    console.log(`${msg}`);
}
greet();
