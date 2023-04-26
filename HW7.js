//Задание 1

console.log("js".toUpperCase());

//Задание 2

function searchStart(array, syllable) {
  let newArray = [];
  array.forEach((word) => {
    if (word.toLowerCase().startsWith(syllable.toLowerCase())) {
      newArray.push(word);
    }
  });
  return newArray;
}
console.log(searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"));
console.log(searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"));
console.log(searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"));

//Задание 3

let a = 32.58884;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));

//Задание 4
//вар 1
//console.log(Math.min(52, 53, 49, 77, 21, 32))
//console.log(Math.max(52, 53, 49, 77, 21, 32))

//вар 2
let str = "52, 53, 49, 77, 21, 32";
let arr = str.split(",").map(Number);

console.log(Math.min(...arr));
console.log(Math.max(...arr));

//Задание 5

function randomInt(min, max) {
  console.log(Math.round(Math.random() * (max - min)) + min);
}
randomInt(1, 10);

//Задание 6

function getRandomArrNumbers(num) {
  let randomArr = [];
  let arrLength = Math.floor(num / 2);

  for (let i = 0; i < arrLength; i++) {
    let randomNum = Math.round(Math.random() * num);
    randomArr.push(randomNum);
  }
  console.log(randomArr);
}

getRandomArrNumbers(10);
getRandomArrNumbers(13);

/*Задание 7
Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.*/

function randomNumber(min, max) {
  console.log(Math.round(Math.random() * (max - min)) + min);
}
randomNumber(-20, 20);

//Задание 8

let todayDate = new Date("4/23/2023");
console.log(todayDate);
//let todayDate = new Date();
//console.log(todayDate)

//Задание 9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

const days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

let myDate = new Date();
let fullDate =
  "Дата: " +
  myDate.getDate() +
  " " +
  months[myDate.getMonth()] +
  " " +
  myDate.getFullYear() +
  " - это " +
  days[myDate.getDay()] +
  `
` +
  "Время:" +
  myDate.getHours() +
  ":" +
  myDate.getMinutes() +
  ":" +
  myDate.getSeconds();

console.log(fullDate);

/*function formatDate(date) {
  const locale = 'ru-RU'
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return `Дата: ${date.toLocaleString(locale, options)} - это ${date.toLocaleString(locale, {weekday: 'long'})}.
Время: ${date.toLocaleTimeString(locale)}`
}
console.log(formatDate(new Date()));*/