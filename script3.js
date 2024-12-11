// Задание №1
let a = 0;
while (a < 2) { 
    console.log('Привет')
    a++;
}
// Задание №2
let b = 1;
while (b < 6) {
 console.log(b) 
 b++;
}
// Задание № 3
let c = 7;
while (c < 23) {
 console.log(c) 
 c++;
}
// Задание № 4
const obj = {
     "Коля" : '200$',
    "Вася" : '300$',
    "Петя" : '400$',
 }
 for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
 }
// Задание №5
let n = 1000;
let num = 0;
while (n >= 50) {
    n/=2; num++;
}
console.log("Получившееся число",n);
console.log("Количество итераций",num);
// Задание №6
const firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
   console.log(`Сегодня пятница, ${i}-е число.`);
}