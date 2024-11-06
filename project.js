 function game1() {
    let usermeaning = Number(prompt('Попробуйте угадать число'));
    const govmeaning = 73;

    while (usermeaning !== govmeaning) {
        if (usermeaning < govmeaning) {
            alert("Неверно, загаданное число больше");
           } else if(usermeaning > govmeaning){
            alert('Неверно, загаданное число меньше');
           }
           else{
            alert("Пожалуйста, введите число от 1 до 100.");
           }
         usermeaning = Number(prompt('Попробуйте угадать число'));
    }  
 }