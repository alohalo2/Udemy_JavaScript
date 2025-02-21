// // 객체일 때
// const obj = {
//     name: "Alice",
//     age: 25,
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// console.log(obj);
// console.dir(obj);

// // HTML일 때
// const element = document.querySelector("body");

// console.log(element);  // HTML 구조가 출력됨
// console.dir(element);  // 객체의 속성과 메서드가 출력됨

// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// const body = document.body;

// // const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for(const listItemEl of listItemElements) {
//     console.dir(listItemEl);
// }

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }
    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});
