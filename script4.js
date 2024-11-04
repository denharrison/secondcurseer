// Задание №1
function smaller(a,b) {
   if (a < b) {
    return a;
   } else {
    return b;
   }
}

console.log(smaller(8,4));
console.log(smaller(6,6));

// Задание №2
const parity = (a) => { 
    if (a % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }  
}

console.log(parity(2));
console.log(parity(5));

// Задание №3
const up = (n) => n ** 2;

console.log(up(3));

// Задание №4
function userAge() {
    let number = Number(prompt('Сколько вам лет ?'))
    if (number < 0) {
        alert('Вы ввели неправильное значение');
    } else if(number >= 0 && number <= 12) {
        alert('Привет друг!');
    }
    else {
        alert('Добро пожаловать!');
    }
}

userAge();

// Задание №5
function calc(a,b) {
    console.log(a);
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не яаляются числом';
    } else {
        return a * b;
    }
}

console.log(calc(3,2));

// Задание №6

function userNumber() { 
    let num = prompt('Введите число');
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

console.log(userNumber());

// Задание №7

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    metogArea: getArea,
    metodPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20,
    metogArea: getArea,
    metodPerimeter: getPerimeter,
}

console.log(circle2.metodPerimeter());
