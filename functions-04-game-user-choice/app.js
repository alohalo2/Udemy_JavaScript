const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoise = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const getWinner = function (cChoise, pChoise) {
//     if (cChoise === pChoise) {
//         return RESULT_DRAW;
//     } else if (
//       cChoise === ROCK && pChoise === PAPER ||
//       cChoise === PAPER && pChoise === SCISSORS ||
//       cChoise === SCISSORS && pChoise === ROCK
//       ) {
//       return RESULT_PLAYER_WINS;
//     } else {
//       return RESULT_COMPUTER_WINS;
//     }
// };

// 화살표 함수 예시, 중괄호 생략 가능
// const add = (a, b) => a + b;

// const add2 = function(a, b) {
//   return a + b;
// }

const getWinner = (cChoise, pChoise) =>
    cChoise === pChoise
        ? RESULT_DRAW
        : (cChoise === ROCK && pChoise === PAPER) ||
          (cChoise === PAPER && pChoise === SCISSORS) ||
          (cChoise === SCISSORS && pChoise === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_PLAYER_WINS;

// if (cChoise === pChoise) {
//     return RESULT_DRAW;
// } else if (
//     (cChoise === ROCK && pChoise === PAPER) ||
//     (cChoise === PAPER && pChoise === SCISSORS) ||
//     (cChoise === SCISSORS && pChoise === ROCK)
// ) {
//     return RESULT_PLAYER_WINS;
// } else {
//     return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log('playerSelection: ' + playerSelection);
    const computerChoise = getComputerChoise();
    console.log('computerChoise: ' + computerChoise);
    const winner = getWinner(computerChoise, playerSelection);
    console.log(winner);
});
