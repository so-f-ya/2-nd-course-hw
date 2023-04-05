//Задание 1

let a = 0;
while (a < 2) {
  console.log("Привет");
  a++;
}
//Задание 2

for (let b = 1; b < 6; b++) {
  console.log(b);
}

//Задание 3

for (let c = 7; c <= 22; c++) {
  console.log(c);
}

//Задание 4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (key in obj) {
  console.log(`${key} — зарплата ${obj[key]} долларов`);
}

//Задание 5

let n = 1000;
let num = 0;
while (n > 50) {
  n = n / 2;
  num++;
}
console.log(n);
console.log(num);

//Задание 6

for (let dayNumber = 7; dayNumber <= 31; dayNumber += 7) {
  console.log(
    `Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`
  );
}
