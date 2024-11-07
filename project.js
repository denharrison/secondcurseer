 function game1() {
    let usermeaning = Number(prompt('Попробуйте угадать число от 1 до 100'));
    const govmeaning = Math.floor(Math.random() * 100) + 1;
    while (usermeaning !== govmeaning) {
        if (usermeaning < govmeaning) {
            alert("Неверно, загаданное число больше");
           } else if(usermeaning > govmeaning){
            alert('Неверно, загаданное число меньше');
           }
           else if(usermeaning === govmeaning){
            alert('Поздравляем! Вы угадали число!');
           }
           else{
           }
         usermeaning = Number(prompt('Попробуйте угадать число'));
    }  
 }