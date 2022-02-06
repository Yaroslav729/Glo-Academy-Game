"use strict"

const randomNum = function () {

    let random = Math.floor(Math.random() * 100);
    console.log(random)

    return function questionGame() {

        let question = prompt("Угадай число от 1 до 100")

        if (question == random) {
            return alert("Вы угадали!!!");

        } else if (question == null) {
            return alert("Игра окончена")

        } else if (question > random) {
            alert("Загаданное число меньше")

        } else if (question < random) {
            alert("Загаданное число больше")

        } else if (question.replace(/\s/g, '').length === 0 || isNaN(question)) {
            alert("Введи число!")

        }
        questionGame()
    }

}

let step = randomNum()
step()
