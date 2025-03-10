// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5); // []
// // console.log(moreNumbers);

// // Array.of : 배열의 값을 넣어서 만들 수 있음
// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// // Array.from : 이터러블이나 유사배열을 진짜 배열로 만들 때 사용됨
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking','Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1], 5];

// for (const data of analyticsData){
//     for (const dataPoints of data) {
//         console.log(dataPoints)
//     }
// }
// console.log(personalData[1]);


// const hobbies = ['Sports', 'Cooking'];
// // .push: 마지막에 값을 넣음
// hobbies.push('Reading');
// // .unshift: 맨 처음에 값을 넣음
// hobbies.unshift('Coding');
// // .pop: 마지막 값을 삭제
// const poppedValue = hobbies.pop();
// // .shift: 맨 처음 값을 삭제함
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// // splice 첫 번째 인자에 음수를 넣으면 배열의 오른쪽(뒤쪽)
// // 에서부터 위치를 계산함
// const removeElements = hobbies.splice(-1, 1);
// console.log(hobbies);


// slice: 배열의 특정 부분을 잘라서 새로운 배열을 반환
// 범위 설정이 가능하며 첫 번째 인자에서 마지막 인자 전까지의 
// 범위를 설정 가능함 
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(0, 1);
// // const storedResults = testResults.slice(-3, -1);
// // const storedResults = testResults.slice(2);

// // concat: 두 개 이상의 배열(또는 문자열)을 합쳐서 새로운 배열(또는 문자열)을 반환
// // 원본 배열을 변경하지 않음
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5,91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// // indexOf: 값을 찾지 못하면 -1을 리턴한다.
// const psersonData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(psersonData.indexOf({name:'Manuel'}));

// const manuel = psersonData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, psersonData);

// const maxIndex = psersonData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustPrices = [];

// for(const price of prices) {
//     taxAdjustPrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
    const priceObj = {index: idx, taxPrice: price * (1 + tax)}
    taxAdjustPrices.push(priceObj);
});

console.log(taxAdjustPrices);

