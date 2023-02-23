"use strict";

console.log(document.forms);

//const mainForm = document.forms[0];
//console.log(mainForm);

const mainForm = document.forms.main;
const mainFormInput = mainForm.formName;
const mainFormTextarea = mainForm.comment;

mainFormInput.addEventListener("input", function (event) {
  console.log("value: ${mainFormInput.value}");
});

mainFormInput.addEventListener("copy", function (event) {
  console.log("Копируем");
});

mainFormInput.addEventListener("paste", function (event) {
  console.log("Вставляем");
});

mainFormInput.addEventListener("cut", function (event) {
  console.log("Вырезаем");
});

mainFormInput.addEventListener("input", function (event) {
  console.log("value: ${mainFormInput.value}");
});
//mainFormInput.addEventListener('change' function (event) {
//console.log("Сработало change в инпут");
//});

//const imputName = document.getElementById("name");
//imputName.addEventListener("change", function (event) {
// console.log(event.target.value);
//});
