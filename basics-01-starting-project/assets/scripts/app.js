const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

//템플릿 리터럴: 문자열 안에 `을 넣고 그 안에 ${}를 써서 안에 
//              변수를 직접 사용 가능하도록 하는 표기법
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 -1`;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';

// \는 뒤에 있는 것들 탈출 시킨다고 생각하면 된다.
// \n: 줄바꿈
// \\: \ 표출
// \': ' 표출
// let errorMessage = 'An error \\' + 
//                     'occurred!\''

outputResult(currentResult, calculationDescription);
