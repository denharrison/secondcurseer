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
function generateRandomTask() {
  const operations = ['+', '-', '*', '/'];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let task = '';
  let correctAnswer;
  switch (operation) {
      case '+':
          correctAnswer = num1 + num2;
          task = `${num1} + ${num2}`;
          break;

      case '-':
          correctAnswer = num1 - num2;
          task = `${num1} - ${num2}`;
          break;

      case '*':
          correctAnswer = num1 * num2;
          task = `${num1} * ${num2}`;
          break;

      case '/':
          correctAnswer = (num1 / num2).toFixed(2);
          task = `${num1} / ${num2}`;
          break;
  }
  return { task, correctAnswer };
}

function Game2() {
  const { task, correctAnswer } = generateRandomTask();
  const userAnswer = prompt(`Решите задачу: ${task}`);
  if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
      alert('Верный ответ!');
  } else {
      alert(`Неверно. Правильный ответ: ${correctAnswer}`);
  }

}