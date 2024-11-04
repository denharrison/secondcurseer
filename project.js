function guessNumber() {
   const number = 73;
   let userNumber = Number(prompt('Попробуйте угадать число'));
   if (userNumber === 73) {
    alert('Ура победа - это то самое число');
   } else if(userNumber > 73){
    alert('Неверно, загаданное число меньше');
   }
   else{
    alert('Неверно, загаданное число больше');
   }
 }
 // Функция на доработке
function gameNumber(){
    let usern = Number(prompt('Попробуйте угадать число'));
    for (const n = 73; usern < n || usern > n; usern) {
        if (usern === n) {
            alert('Ура победа - это то самое число');
           } else if(usern > n){
            alert('Неверно, загаданное число меньше');
           }
           else{
            alert('Неверно, загаданное число больше');
           }
           break;
    }
 }
 