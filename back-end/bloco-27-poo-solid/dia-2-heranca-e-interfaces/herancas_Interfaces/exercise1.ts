class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = 'DEFAULT'
    if (name.length >= 3) {
      this._name = name;
    }
    this._birthDate = birthDate;

  }

  get getName(): string {
    return this._name;
  }

  get getBirthDate(): Date {
    return this._birthDate;
  }

  set setName(nameUser: string) {
    if (nameUser.length < 3) throw new Error("Invalid name");
    this._name = nameUser;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  set newDate(date: Date) {
    if (date.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(date) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    this._birthDate = date
  }
};

export default Person;

const person1 = new Person('Die', new Date(Date.parse('June 22, 2020')));
console.log(person1.getName);
console.log(person1.getBirthDate);

console.log("🚀 ~ file: exeercise1.ts ~ line 22 ~ person1", person1);
