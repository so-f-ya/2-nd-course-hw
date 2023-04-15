//Задание 1

function compareNumber(a, b) {
  return a <= b ? a : b;
}

console.log(compareNumber(8, 4));
console.log(compareNumber(6, 6));
console.log(compareNumber(1, 9));

//Задание 2

function oddEven(n) {
  return n % 2 == 0 ? "Число четное" : "Число нечетное";
}

console.log(oddEven(7));
console.log(oddEven(-8));

// Задание 3

function squre1(q) {
  console.log(q ** 2);
}
squre1(5);

function squre2(q) {
  return q ** 2;
}
console.log(squre2(7));

//Задание 4

function sayHello() {
  let i = prompt("Сколько Вам лет?");
  if (i > 13) {
    alert("Добро пожаловать!");
  } else if (i >= 0 && i <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Вы ввели неправильное значение");
  }
}

sayHello();

//Задание 5

const isNumber = (a, b) => {
  return !isNaN(a) && !isNaN(b)
    ? a * b
    : "Одно или оба значения не являются числом";
  /* if (isNaN(a) !== true && isNaN(b) !== true) {
     return(a * b);   
    } else {
        return("Одно или оба значения не являются числом")
    }*/
};
console.log(isNumber(5, 2));
console.log(isNumber("abc", 2));

//Задание 6

function cube() {
  let a = prompt("Введите число");
  return !isNaN(a)
    ? alert(`${a} в кубе равняется ${a ** 3}`)
    : alert("Переданный параметр не является числом");
}
cube();

//Задание 7

function getCircleArea() {
  return Math.PI * this.radius;
}
function getCirclePerimeter() {
  return 2 * Math.PI * this.radius;
}

const circle1 = {
  radius: 4,

  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

const circle2 = {
  radius: 9,

  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
