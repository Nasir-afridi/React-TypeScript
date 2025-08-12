let obj = {
    name : "nasir",
    sayHello : function sayHello() {
        console.log(`hello ${this.name}`)
    }
}

const greetFunc = obj.sayHello
greetFunc()


const Funct = greetFunc.bind(obj)
Funct()


function introduce(city, country) {
    console.log(`my Name is ${this.nmae}, am from ${city}: ${country}`)
}

const user = {nmae : "nasir"}
introduce.call(user, "islamabad", "pakistan")
introduce.apply(user, ["pindi", "islamabad"])