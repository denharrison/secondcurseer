function game1() {
  let userMeaning = Number(prompt('Попробуйте угадать число от 1 до 100'));
  const govMeaning = Math.floor(Math.random() * 100) + 1;
  while (userMeaning !== govMeaning) {
    if (userMeaning < govMeaning) { 
        userMeaning = Number(prompt("Неверно, загаданное число больше"));
    } else if (userMeaning > govMeaning) {
        userMeaning = Number(prompt("Неверно, загаданное число меньше"));
    }
  }
  alert('Поздравляем! Вы угадали число!'); 
}