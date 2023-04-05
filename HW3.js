//Задание 1

let password = "пароль";
let userPassword = prompt(`Введите пароль`);
let message;
message =
  password == userPassword
    ? "Пароль введен верно"
    : "Пароль введен неправильно";
alert(message);

//Задание 2

let c = 4;
if (c > 0 && c < 10) {
  alert("Верно");
} else alert("Неверно");

//Задание 3

let d = 1;
let e = 202;
if (d > 100 || e > 100) {
  alert("Верно");
} else alert("Неверно");

//Задание 4

let a = "2";
let b = "3";
alert(Number(a) + Number(b));

//Задание 5

let monthNumber = 12;
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Нет такого месяца");
    break;
}

//Задание 7

let num = prompt("Пожалуйста, введите любое число");
num = Number(num);
if (Math.abs(num) % 2 === 1) {
  alert("Число нечетное");
} else if (Math.abs(num) % 2 === 0) {
  alert("Число четное");
} else {
  alert("Не число");
}

//Задание 8

let clientOS = 1;
if (clientOS === 0) {
  alert("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
  alert("Установите версию приложения для Android по ссылке");
} else {
  alert("Ошибка, версия приложения доступна для iOS и Android");
}

//Задание 9

clientOS = 0;
let clientDeviceYear = 2015;
if (clientOS === 0 && clientDeviceYear >= 2015) {
  alert("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 0 && clientDeviceYear <= 2015) {
  alert("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS === 1 && clientDeviceYear >= 2015) {
  alert("Установите версию приложения для Android по ссылке");
} else if (clientOS === 1 && clientDeviceYear <= 2015) {
  alert("Установите облегченную версию приложения для Android по ссылке");
} 
