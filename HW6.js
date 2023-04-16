//Задание 1

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i]);
  if (numbs[i] == 10) break;
}
//Задание 2

console.log(numbs.indexOf(4));

//Задание 3

const numbsArr = [1, 3, 5, 10, 20];
console.log(numbsArr.join(" "));

//Задание 4

const arr = [];
for (let i = 0; i <= 2; i++) {
  arr.push([]);
  for (let j = 0; j <= 2; j++) {
    arr[i][j] = 1;
  }
}
console.log(arr);

//Задание 5

const a = [1, 1, 1];
a.push(2, 2, 2);
console.log(a);

//Задание 6

let mix = [9, 8, 7, "a", 6, 5];
mix.sort();
mix.pop();
console.log(mix);

//Задание 7

const arr7 = [9, 8, 7, 6, 5];
i = Number(prompt("Введите число от 1 до 10"));
alert(arr7.includes(i));

//Задание 8

let letters = "abcdef";
letters = letters.split("");
letters = letters.reverse();
letters = letters.join("");
console.log(letters);

//Задание 9

let array9 = [
  [1, 2, 3],
  [4, 5, 6],
];
array9[0].push(...array9[1]);
console.log(array9[0]);

//Задание 10

const array10 = [8, 2, 4, 1, 5];

for (let a = 0; a < array10.length - 1; a++) {
  console.log(array10[a] + array10[a + 1]);
}

//Задание 11

const array = [5, 6, 7, 8, 9];
let squareNum;
function square() {
  squareNum = array.map((el) => el ** 2);
  return squareNum;
}

// или
// const square = array11.map(el=> el ** 2)

square(array);
console.log(squareNum);

//Задание 12

let words = [
  "Создайте",
  "функцию",
  ",",
  "которая принимает",
  "на вход массив строк",
];
let sumSymbol;
function countingSymbol() {
  let wordsSplit = words.map((item) => item.split(""));
  sumSymbol = wordsSplit.map((el) => el.length);
  return sumSymbol;
}
countingSymbol(words);
console.log(sumSymbol);

//Задание 13

let int = [0, 1, -3, -5, 7, -12];
let negative;
function negativeInt() {
  negative = int.filter((el) => el < 0);
  return negative;
}

negativeInt(int);
console.log(negative);

//Задание 14

let array14 = [];
for (let i = 0; i < 10; i++) {
    array14.push(Math.round(Math.random() * 10))};

console.log(array14)
let evenNum
function even (){
    evenNum = array14.filter((el) => el % 2 == 0);
  return negative;
};
even(evenNum);
console.log(evenNum)

//Задание 15

let array15 = [];
for (let i = 0; i < 6; i++) {
    array15.push(Math.round(Math.random() * (10 + 1)+1))};
let averageResult
function average() {
    averageResult = array15.reduce((a, b) => (a + b)) / array15.length;
    };
console.log(array15)
average(array15)
console.log(averageResult)