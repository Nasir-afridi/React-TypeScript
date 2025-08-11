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
