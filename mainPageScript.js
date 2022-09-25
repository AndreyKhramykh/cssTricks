let examplesArray = document.querySelectorAll('.menu__item');
console.log(examplesArray);

let example1 = examplesArray[0];
console.log(example1);

let example2 = examplesArray[1];

let example3 = examplesArray[2];

let example4 = examplesArray[3];

let example5 = examplesArray[4];

let example6 = examplesArray[5];

example1.addEventListener('click', () => {
    location.assign('exampleOfTricks/trick1.html')
});

example2.addEventListener('click', () => {
    location.assign('exampleOfTricks/trick2.html')
});

example3.addEventListener('click', () => {
    location.assign('exampleOfTricks/trick3.html')
});

example4.addEventListener('click', () => {
    location.assign('exampleOfTricks/trick4.html')
});

example5.addEventListener('click', () => {
    location.assign('exampleOfTricks/trick5.html')
});

example6.addEventListener('click', () => {
    location.assign('exampleOfTricks/trick6.html')
});

let menuButton = document.querySelector('#menuButton');
let infoButton = document.querySelector('#infoButton');

menuButton.addEventListener('click', () => {
    location.assign('index.html');
})

infoButton.addEventListener('click', () => {
    location.assign('exampleOfTricks/info.html');
})
