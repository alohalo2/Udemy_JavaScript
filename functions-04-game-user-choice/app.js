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
        // return DEFAULT_USER_CHOICE;
        return;
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

const getWinner = (cChoise, pChoise = DEFAULT_USER_CHOICE) =>
    cChoise === pChoise
        ? RESULT_DRAW
        : (cChoise === ROCK && pChoise === PAPER) ||
          (cChoise === PAPER && pChoise === SCISSORS) ||
          (cChoise === SCISSORS && pChoise === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;

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

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    // console.log('playerSelection: ' + playerSelection);
    const computerChoice = getComputerChoise();
    // console.log('computerChoise: ' + computerChoise);
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }
    // console.log(winner);
    // let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
    // let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    let message = `You picked ${
        playerChoice || DEFAULT_USER_CHOICE
    }, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

// note related to game

// Rest parameter 사용하지 않을 때 여러개의 인수를 넣는 방법
// const sumUp = (numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };

// console.log(sumUp([1, 5, 10, -3, 6, 10]));

// Rest parameter 할 때
// Rest parameter 외의 추가 인수를 Rest parameter 앞쪽에 사용할 수 있다.
// a, b의 인수는 첫 번째와 두 번째의 인수로 들어가고 Rest parameter는 세 번째부터 적용된다.
// const sumUp = (a, b, ...numbers) => {
//     const validateNumber = (number) => {
//         return isNaN(number) ? 0 : number;
//     };

//     let sum = 0;
//     for (const num of numbers) {
//         sum += validateNumber(num);
//     }
//     return sum;
// };

const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
};

// const subtractUp = function() {
//     let sum = 0;
//     for (const num of arguments) { // don't use that
//         sum -= num;
//     }
//     return sum;
// };

const subtractUp = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers) {
        // don't use that
        sum -= num;
    }
    resultHandler(sum);
};

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 'sum', -3, 6, 10);
combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);
combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 10, 15, 20);
