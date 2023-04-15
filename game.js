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
