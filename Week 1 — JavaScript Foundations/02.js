// 1.
function factorail(n) {
    n = n * n
    return n
}
console.log(factorail(2))


//2.
function palindrome(name) {
    let str = name.split('').reverse('').join('')
    return name === str
}
console.log(palindrome("madam"))


//3.
const square = (sqr) => {
    return sqr * sqr
}
console.log(square(2))


//4.
const multiplys = function (a, b) {
    let result = a * b
    return result
}
console.log(multiplys(4, 8))