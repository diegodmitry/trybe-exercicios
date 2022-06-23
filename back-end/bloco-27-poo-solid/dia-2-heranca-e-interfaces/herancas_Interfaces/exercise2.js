"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = __importDefault(require("./exercise1"));
class Student extends exercise1_1.default {
    constructor(name, date) {
        super(name, date);
        this._examsGrades = []; // notas de provas
        this._worksGrades = []; // notas de trabalhos
        this._enrollment = this.generateEnrollment();
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
    get averageExamsGrades() {
        return (this._examsGrades.reduce((x, y) => x + y, 0)) / this._examsGrades.length;
    }
    get averageWorksGrades() {
        return (this._worksGrades.reduce((x, y) => x + y, 0)) / this._worksGrades.length;
    }
    get averageAllGrades() {
        return (this.averageExamsGrades + this.averageWorksGrades) / 2;
    }
    set setExamsGrades(grades) {
        if (grades.length !== 4)
            throw new Error("You should put 4 grades.");
        this._examsGrades = grades;
    }
    set setWorksGrades(grades) {
        if (grades.length !== 2)
            throw new Error("You should put 2 grades.");
        this._worksGrades = grades;
    }
}
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
carolina.setExamsGrades = [7, 8, 5, 10];
carolina.setWorksGrades = [0, 0];
console.log('Carolina average: ', carolina.averageExamsGrades);
