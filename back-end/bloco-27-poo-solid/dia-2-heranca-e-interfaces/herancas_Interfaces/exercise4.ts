// Crie uma classe cujos objetos representem uma disciplina lecionada na escola.

export default class Subject {
  private _name: string = ''; // nome da disciplina
  constructor(name: string) {
    if (name.length < 3) {
      throw new Error("O nome tem que possuir no mínimo 3 caracteres");
    }
    this._name = name;
  };

  get getName() {
    return this._name;
  }

  
  set setName(name : string) {
    if (name.length < 3) {
      throw new Error("O nome tem que possuir no mínimo 3 caracteres");
    }
    this._name = name;
  }
  
}

const math = new Subject('Mathematics');
math.setName = 'English';
console.log(math.getName);
console.log('math', math);
