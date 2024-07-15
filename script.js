'use strict';

function lose() {
  document.querySelector('.message').textContent = ' You lose the game !';
  document.querySelector('.score').textContent = 0;
}

function showScore() {
  document.querySelector('.score').textContent = score;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let setSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let score = 20;
let highScore = 0;
let secretNumber = setSecretNumber();

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('Please enter a number!');
    // document.querySelector('.message').textContent = 'Please enter a number!';
  }

  // When the  input is not in the asked range
  else if (guess <= 0 || guess > 20) {
    displayMessage('Between 1 and 20 !');
    // document.querySelector('.message').textContent = 'Between 1 and 20 !';
  }

  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    let bodyEL = (document.querySelector('.body').style.backgroundColor =
      '#60b347');

    displayMessage('Correct Number !');
    // document.querySelector('.message').textContent = 'Correct Number !';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // using ternary operator
      displayMessage(guess > secretNumber ? '  Too High ! ' : '  Too Low ! ');

      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '  Too High ! ' : '  Too Low ! ';
      score--;
      showScore();
    } else {
      lose();
    }
  }

  // if score turns to zero
});

// to reload the page
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = setSecretNumber();

  score = 20;
  showScore();
  let bodyEL = (document.querySelector('.body').style.backgroundColor = '#222');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
});
