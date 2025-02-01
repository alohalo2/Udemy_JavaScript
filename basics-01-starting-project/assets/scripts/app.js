const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// input value를 얻는 함수
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// calc 내용 문자로 표출 함수
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// parseInt: 문자를 정수로 변환
// parsefloat: 문자를 실수로 변환
// 덧셈 계산이 이루어지는 함수
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

// 뺄셈 계산이 이루어지는 함수
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

// 곱셈 계산이 이루어지는 함수
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

// 나눗셈 계산이 이루어지는 함수
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// 함수 호출 및 할당
// currentResult = add(1, 2);

//템플릿 리터럴: 문자열 안에 `을 넣고 그 안에 ${}를 써서 안에
//              변수를 직접 사용 가능하도록 하는 표기법
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// \는 뒤에 있는 것들 탈출 시킨다고 생각하면 된다.
// \n: 줄바꿈
// \\: \ 표출
// \': ' 표출
// let errorMessage = 'An error \\' +
//                     'occurred!\''
