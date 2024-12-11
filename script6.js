// Задание № 1
const answer = 'js';
console.log(answer.toLocaleUpperCase());
// Задание № 2
function filter(arr,str) {
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
        result.push(arr[i]);
    }
}
return result;
}
console.log(filter(['Boris','Bomba','Andrey'], 'bo'));
// Задание № 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
// Задание № 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));
// Задание № 5
function randomNumber() {
    return  Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber());
// Задание № 6
function getRandomNum(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * num));
        return arr;
    }
}
console.log(getRandomNum(10));
// Задание № 7
function randomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(12,20));
// Задание № 8
console.log(new Date());
// Задание № 9
currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);
// Задание № 10
function formatDateRussian(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
       ];
       const daysOfWeek = [
        "воскресенье", "понедельник", "вторник", "среда", "четверг",
        "пятница", "суббота"
       ];
       const day = date.getDate();
       const month = months[date.getMonth()];
       const year = date.getFullYear();
       const dayOfWeek = daysOfWeek[date.getDay()];
       const hours = date.getHours().toString().padStart(2, '0'); 
       const minutes = date.getMinutes().toString().padStart(2, '0'); 
       const seconds = date.getSeconds().toString().padStart(2, '0'); 
       const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
       return formattedDate;
      }
console.log(formatDateRussian(new Date()));