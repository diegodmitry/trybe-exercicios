const form = document.querySelector("#form");
// const username = document.querySelector("#nome-input");
// const email = document.querySelector("#email-input");
const cpf = document.querySelector("#cpf-input");
const endereco = document.querySelector("#end-input");
const cidade = document.querySelector("#cid-input");
const estado = document.querySelector("#select-estado");
const moradia = document.querySelector("#select-estado");
const radiosButtons = document.querySelector("#button-radio");
const textArea = document.querySelector("#resumo-currículo");
const cargo = document.querySelector("#cargo-input");
const descCargo = document.querySelector("#desc-cargo-input");
const select = document.getElementById("select-estado");
const date = document.getElementById("date-input");
const btn = document.getElementById("btn");
const btnClean = document.querySelector("#btnCleanField");

const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goias",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Para",
  "Paraiba",
  "Parana",
  "Pernambuco",
  "Piaui",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondonia",
  "Roraima",
  "Santa Catarina",
  "Sao Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

states.forEach((state) => {
  const option = document.createElement("option");
  option.value = state;
  option.textContent = state;
  select.appendChild(option);
});

const checkInputs = () => {
  // flag to submit form
  let status = true;

  // get values from input
  // const usernameValue = username.value.trim();
  // const emailValue = email.value.trim();
  const cpfValue = cpf.value.trim();
  const enderecoValue = endereco.value.trim();
  const cidadeValue = cidade.value.trim();
  const textAreaValue = textArea.value.trim();
  const cargoValue = cargo.value.trim();
  const descCargoValue = descCargo.value.trim();

  // const arrDates = date.value.split("/");

  status = isValidCPF(cpfValue)

  if (enderecoValue === "") {
    status = false;
  } else if (cidadeValue === "") {
    status = false;
  } else if (textAreaValue === "") {
    status = false;
  } else if (cargoValue === "") {
    status = false;
  } else if (descCargoValue === "") {
    status = false;
  }

  // Validation in the date field
  // if (arrDates[0] < 0 || arrDates[0] > 31) {
  //   status = false;
  //   return alert("Invalid Day");
  // } else if (arrDates[1] < 0 || arrDates[1] > 12) {
  //   status = false;
  //   return alert("Invalid Month");
  // } else if (arrDates[2] < 0) {
  //   status = false;
  //   return alert("Invalid Year");
  // } else if (arrDates.length < 3) {
  //   status = false;
  //   return alert("You need fill, DD/MM/YYYY");
  // }

  return status;
};

// // To get the HTML form data
const divForm = () => {
  const obj = {};
  obj.name = form.children[0].children[1].value;
  obj.email = form.children[0].children[3].value;
  obj.cpf = form.children[0].children[5].value;
  obj.endereco = form.children[0].children[7].value;
  obj.cidade = form.children[0].children[9].value;
  obj.estado = form.children[0].children[10].value;
  obj.moradia = isCheckedRadioBtn(form.children[0].children);
  obj.resume = form.children[1].children[1].value;
  obj.cargo = form.children[1].children[3].value;
  obj.descriptCargo = form.children[1].children[5].value;
  obj.date = form.children[1].children[7].value;

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      const div = document.createElement("div");
      div.className = "allValues";

      div.textContent = element;
      form.appendChild(div);
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    divForm();
    // e.target.submit();
  }
});

// // check which radio btn is selected
// // using ternary operator
const isCheckedRadioBtn = (item) =>
  item[12].checked ? item[12].value : item[14].value;

// Btn Clean
btnClean.addEventListener("click", (e) => {
  const [...divAll] = document.querySelectorAll(".allValues");

  for (const el of form) {
    if (el.type === "text" || el.type === "email" || el.type === "textarea") {
      el.value = "";
    }
  }
  divAll.forEach((el) => el.remove());
});

// Using DatePickerX library
window.addEventListener("DOMContentLoaded", () => {
  const inputDate = document.getElementById("date-input");
  inputDate.DatePickerX.init({ format: "dd/mm/yyyy" });
});

// Check if is a valid CPF
// source: https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
function isValidCPF(cpf) {
  // Validar se é String
  if (typeof cpf !== 'string') return false
  
  // Tirar formatação
  cpf = cpf.replace(/[^\d]+/g, '')
  
  // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
  
  // String para Array
  cpf = cpf.split('')
  
  const validator = cpf
      // Pegar os últimos 2 digitos de validação
      .filter((digit, index, array) => index >= array.length - 2 && digit)
      // Transformar digitos em números
      .map( el => +el )
      
  const toValidate = pop => cpf
      // Pegar Array de items para validar
      .filter((digit, index, array) => index < array.length - pop && digit)
      // Transformar digitos em números
      .map(el => +el)
  
  const rest = (count, pop) => (toValidate(pop)
      // Calcular Soma dos digitos e multiplicar por 10
      .reduce((soma, el, i) => soma + el * (count - i), 0) * 10) 
      // Pegar o resto por 11
      % 11 
      // transformar de 10 para 0
      % 10
      
  return !(rest(10,2) !== validator[0] || rest(11,1) !== validator[1])
}