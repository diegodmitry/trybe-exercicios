import Person from "./exercise1";
import Employee from './exercise3';
import Subject from './exercise4';

class Teacher extends Person implements Employee{
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date = new Date();
  
  subject: Subject;
  
  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    
    this.subject = subject;
    this._registration = this.generateRegistration();
    this._salary = salary;

  }
  
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FNC${randomStr}`;
  }
  
  get getSubject() {
    return this.subject;
  }

  set setSubject(subject: Subject) {
    this.subject = subject;
  }

  get registration(): string {
    return this._registration;
  }

  set setRegistration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

}

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);