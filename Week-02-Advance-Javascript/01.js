function outer() {
    let count = 0;
    return function inner() {
        count ++;
        console.log(count)
    }
}

let res = outer()
res()
res()
res()
res()