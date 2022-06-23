"use strict";
;
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Hello World');
    }
}
;
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
    sayHello2() {
        this.sayHello();
    }
}
function myFunc(obj) {
    obj.sayHello2();
    const result = obj.isSuper ? 'Super!' : 'Sub!';
}
// Comente a criação da instância da Superclass. 
// const superClassObj = new Superclass();
const subClassObj = new Subclass();
// Comente a chamada da função que possui o objeto do tipo Superclass como parâmetro. 
// myFunc(superClassObj);
myFunc(subClassObj);
class MyClass {
    // myNumber: number;
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return (this.myNumber + myParam).toString();
    }
}
const objMyClass = new MyClass(10);
console.log('myNumber', objMyClass.myNumber);
console.log('myFunc', objMyClass.myFunc(25));
