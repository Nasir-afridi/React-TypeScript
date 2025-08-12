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