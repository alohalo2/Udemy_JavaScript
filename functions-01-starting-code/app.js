const startGameBtn = document.getElementById('start-game-btn');

function ParentFunction() {
    console.log('Parent Function arguments: ', arguments);
    // const innerFunction = () => {
    //     console.log('Inner Function arguments: ', arguments);
    // }
    function innerFunction () {
        console.log('Inner Function arguments: ', arguments);
    }
    innerFunction(10,20,30);
    console.dir(innerFunction);
    console.log(arguments);
}

ParentFunction(1,2,3);
console.dir(ParentFunction);

//--------------------------------------------------
// 문장: 값을 반환하지 않음, 변수 할당 불가능
// ex) if(i > 0) {}...
// 표현식: 값을 반환함, 변수 할당 가능
// ex) i > 0 ...
const start = function startGame() {
    console.log('Game is starting...');
}

//--------------------------------------------------
// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.dir(startGame);

// startGameBtn.addEventListener('click', startGame);
startGameBtn.addEventListener('click', start);