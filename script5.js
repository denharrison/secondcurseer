// Задание №1
const a = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  if (a[i] === 10) {
    break;
  }
}
// Задание №2
const b = [1, 5, 4, 10, 0, 3];
console.log(b[2]);
// Задание №3
const c = [1, 3, 5, 10, 20];
console.log(c.join(''));
// Задание №4
const d = [];
for (let i = 0; i<3; i++) {
   const d2 = [];
   for (let i = 0; i < 3; i++) {
    d2.push(1);
   }
   d.push(d2);
}
console.log(d);
// Задание №5
const e = [1, 1, 1];
e.push(2, 2, 2);
console.log(e);
// Задание №6
const f = [9, 8, 7, 'a', 6, 5];
console.log(f.sort());
// Задание №7
const num = [9, 8, 7, 6, 5];
const numUser = Number(prompt('Выберите число'));
if (num.includes(numUser)) {
  alert('Угадал');
} else {
  alert ('Не угадал');
}
// Задание №8
let rev = 'abcdef';
rev = rev.split('');
rev = rev.reverse();
rev = rev.join('');
console.log(rev);
// Задание №9
const mas = [[1, 2, 3],[4, 5, 6]];
const masNew = [];
for (let i = 0; i < mas.length;i++) {
  masNew.push(...mas[i]);
}
console.log(mas);
// Задание №10
const arbitrary = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < arbitrary.length; i++) {
  if (arbitrary[i + 1]) {
    console.log(arbitrary[i] + arbitrary [i + 1]);
  }
}
// Задание №11
function squre(arr) {
  return arr.map(item => item ** 2);
}
console.log(squre([5,6,9]));
// Задание №12
function converter(arr) {
  return arr.map(item => item.length);
}
console.log(converter(['Hey','Geeeeeey']));
// Задание №13
function numberNegativ(array) {
  return array.filter(item => item < 0);
}
console.log(numberNegativ([1,2.-2,4,-7]));
// Задание №14
function numberRandom() {
   return Math.floor(Math.random() * 10);
}
const mathNum = [];
for (let i = 0; i < 10; i++) {
   mathNum.push(numberRandom());
}
console.log(mathNum);
const evenMath = [];
for (let i = 0; i < mathNum.length; i++) {
    if (mathNum[i] % 2 === 0) {
      evenMath.push(mathNum[i]);
    }
}
console.log(evenMath);
// Задание №15
for (let i = 0; i < 10; i++) {
  mathNum.push(numberRandom());
}
console.log(mathNum);
console.log(mathNum.reduce((a, b) => a + b) / mathNum.length);