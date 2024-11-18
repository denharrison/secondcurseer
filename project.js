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
function Game3() {
  const input = prompt('Введите текст, который будет перевернут !')
  const reversed = input.split('').reverse().join('');
  alert(reversed);
}
function Game4() {
  const quiz = [

    {
        question: "Какого цвета небо?",
        options: ["1. Красного", "2. Синего", "3. Зеленого"],
        correctAnswer: 2
    },

    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },

    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }

];

let score = 0;
quiz.forEach((item) => {
  let userAnswer = prompt(`${item.question}\ | ${item.options.join(' , ')}`);
   if (parseInt(userAnswer) === item.correctAnswer) {
  score++;
  }

});

alert(`Вы правильно ответили на ${score} из ${quiz.length} вопросов.`);

}
function Game5() {
  const options = ["камень", "ножницы", "бумага"]; // Массив с вариантами
  
  let userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага").toLowerCase();
  
  if (!options.includes(userChoice)) {
    alert("Некорректный выбор! Пожалуйста, выберите камень, ножницы или бумагу.");
    return;
  }

  let computerChoice = options[Math.floor(Math.random() * options.length)];  // Cлучайный выбор компьютера
  
  // Определяем победителя

  let result;
  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы победили!";
  } else {
    result = "Компьютер победил!";
  }

  alert(` Вы выбрали: ${userChoice} | Выбор компьютера: ${computerChoice} |  Итог: ${result}`);
}