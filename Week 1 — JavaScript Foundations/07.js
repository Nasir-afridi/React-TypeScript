// 1.
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2.
let i = 1
let num = 5;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`)
    i++
}


// 3.
let sum = 0
for(let i = 1; i <= 50; i += 2) {
    sum = sum + i
}
console.log(sum)