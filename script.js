'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (guess === 0) {
        displayMessage('⛔No Number');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣 You Lost The Game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#d62828';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

})