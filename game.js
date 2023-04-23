function Seasons() {
  let season = Number(prompt("Введите номер любого месяца года"));
  if ((season > 0 && season <= 2) || season === 12) {
    alert("Зима");
  } else if (season >= 3 && season <= 5) {
    alert("Весна");
  } else if (season >= 6 && season <= 8) {
    alert("Лето");
  } else if (season >= 9 && season <= 11) {
    alert("Осень");
  } else {
    alert("Ошибка, неверный месяц");
  }
}

function WordGame (){
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
words = words.sort(() => Math.random() - 0.5);
alert(words)
let userWord1 = prompt("Введите первое слово");
let userWord2 = prompt("Введите последнее слово");

if (userWord1.toLowerCase() == words[0].toLowerCase() && userWord2.toLowerCase() == words[6].toLowerCase()) {
  alert("Поздравляю, верно!");
  } else if ((userWord1.toLowerCase() == words[0].toLowerCase() || userWord2.toLowerCase() == words[6].toLowerCase())) {
    alert("Вы были близки к победе!");
  } else {
  alert("Неверно")}
}
