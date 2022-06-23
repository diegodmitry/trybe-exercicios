import Employee from './Employee';

export default class Teacher extends Employee {
  private _subject: string;

  constructor(name: string, birthDate: Date, salary: number, subject: string) {
    super(name, birthDate, salary);

    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}