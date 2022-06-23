"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = __importDefault(require("./exercise1"));
const exercise4_1 = __importDefault(require("./exercise4"));
class Teacher extends exercise1_1.default {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate);
        this._admissionDate = new Date();
        this.subject = subject;
        this._registration = this.generateRegistration();
        this._salary = salary;
    }
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FNC${randomStr}`;
    }
    get getSubject() {
        return this.subject;
    }
    set setSubject(subject) {
        this.subject = subject;
    }
    get registration() {
        return this._registration;
    }
    set setRegistration(value) {
        if (value.length < 16)
            throw new Error('O registro deve possuir no mínimo 16 caracteres.');
        this._registration = value;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0)
            throw new Error('O salário não pode ser negativo.');
        this._salary = value;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de admissão não pode ser uma data no futuro.');
        this._admissionDate = value;
    }
}
const math = new exercise4_1.default('Matemática');
const history = new exercise4_1.default('História');
const philosophy = new exercise4_1.default('Filosofia');
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
