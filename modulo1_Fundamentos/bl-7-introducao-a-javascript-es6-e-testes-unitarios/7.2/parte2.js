const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// 1.
const addProp = (obj, key, value) => (obj[key] = value);
addProp(lesson2, "turno", "noite");

// 2.
// Using forin
// const showKeysOfObj = (obj) => {
//   let arrOfKeys = [];
//   for (const key in obj) arrOfKeys.push(key);
//   return arrOfKeys;
// };

//no forin
const showKeysOfObj = (obj) => Object.keys(obj);
console.log(showKeysOfObj(lesson2));

// 3.
const whichSizeObj = (obj) => Object.keys(obj).length;
console.log(whichSizeObj(lesson2));

// 4.
const showValuesOfObj = (obj) => Object.values(obj);
console.log(showValuesOfObj(lesson2));

// 5.
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6.
const totalStudents = (obj) => {
  const [_, studentsLesson1] = Object.values(obj.lesson1);
  const [_1, studentsLesson2] = Object.values(obj.lesson2);
  const [_2, studentsLesson3] = Object.values(obj.lesson3);
  return studentsLesson1 + studentsLesson2 + studentsLesson3;
};
console.log(totalStudents(allLessons));

// 7.
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

// 8.
const verifyPair = (obj, key, valueKey) => {
  
  const arr = Object.entries(obj);
  let isEqual = false;
  
  for (const i in arr) {
    if (arr[i][0] === key && arr[i][1] === valueKey) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// BONUS
const getNumberAllMathStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  console.log(array);
  for (const key in array) {
    if (obj[array[key]].materia === 'Matemática') {
      total += obj[array[key]].numeroEstudantes;
    }
  }
  return total;
};

console.log('Total of Math Students: ',getNumberAllMathStudents(allLessons));

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));