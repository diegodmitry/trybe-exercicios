"use strict";
// Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(name) {
        this._name = ''; // nome da disciplina
        if (name.length < 3) {
            throw new Error("O nome tem que possuir no mínimo 3 caracteres");
        }
        this._name = name;
    }
    ;
    get getName() {
        return this._name;
    }
    set setName(name) {
        if (name.length < 3) {
            throw new Error("O nome tem que possuir no mínimo 3 caracteres");
        }
        this._name = name;
    }
}
exports.default = Subject;
const math = new Subject('Mathematics');
math.setName = 'English';
console.log(math.getName);
console.log('math', math);
