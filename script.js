"use strict"

let rondom = 55;



function questionGame() {

    let question = prompt("Угадай число от 1 до 100")

    if (question == rondom){
        return alert("Вы угадали!!!");

    }else if (question == null ) {
        return alert("Игра окончена")

    }else if (question > rondom ) {
        alert("Загаданное число меньше")

    }else if (question < rondom ) {
        alert("Загаданное число больше")

    }else if (question.replace(/\s/g, '').length === 0 || isNaN(question)) {
        alert("Введи число!")

    }

questionGame();
}
questionGame();