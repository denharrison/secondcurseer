 function game1() {
    let userMeaning = Number(prompt('Попробуйте угадать число от 1 до 100'));
    const govMeaning = Math.floor(Math.random() * 100) + 1;
   while (isNaN(userMeaning) || userMeaning < 1 || userMeaning > 100) {
      userMeaning = Number(prompt('Ошибка! Введите число от 1 до 100:'));
  }
  while (userMeaning !== govMeaning) {
    if (userMeaning < govMeaning) {
        alert("Неверно, загаданное число больше");
    } else {
        alert("Неверно, загаданное число меньше");
    } 
    userMeaning = Number(prompt('Попробуйте угадать число от 1 до 100'));
    while (isNaN(userMeaning) || userMeaning < 1 || userMeaning > 100) {
     userMeaning = Number(prompt('Ошибка! Введите число от 1 до 100:'));
   }
 }
 alert('Поздравляем! Вы угадали число!');
 }