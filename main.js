let formEl, answerEl, resultEl, addendOneEl, addendTwoEl, nextLink;
addendOneEl = document.getElementById('addendOne');
addendOneEl.innerText = Math.floor(Math.random() * 100);
console.log(addendOneEl);

addendTwoEl = document.getElementById('addendTwo');
addendTwoEl.innerText = Math.floor(Math.random() * 100);
console.log(addendTwoEl);

const answer = parseInt(addendOneEl.innerText) + parseInt(addendTwoEl.innerText);
console.log(answer);

nextLink = document.getElementById('nextQLink');
console.log(nextLink);
formEl = document.getElementById('quiz');
console.log(formEl);
answerEl = document.getElementById('answer');
console.log(answerEl);
resultEl = document.getElementById('result');
console.log(resultEl);

// Answer Check code
function checkAndWrite(event) {
    if(answerEl.value == answer) {
        console.log('User got it correct and answerEl has value ' + answerEl.value);
        resultEl.innerText = 'Great job! You got it correct!';
        nextLink.hidden = false;
    } else {
        console.log('User got it incorrect and answerEl has value ' + answerEl.value);
        resultEl.innerText = 'Sorry, that was incorrect. Try again!';
    }
    event.preventDefault();
}

formEl.addEventListener('submit', checkAndWrite);

// Linear Equations code
let linearEl, var1, var2, resultX;
linearEl = document.getElementById('linearEquation');
var1 = document.getElementById('varA');
var2 = document.getElementById('varB');
resultX = document.getElementById('resultX');

function solveForX(event) {
    solver(var1.value, var2.value, resultX)
    event.preventDefault();
}

function solver(a, b, el) {
    if(a != 0) {
        el.innerText = b/a;
    } else if(a == 0 && b != 0) {
        el.innerText = 'Sorry, there is no solution to this equation.';
    } else {
        el.innerText = 'Infinite Solutions';
    }
}

linearEl.addEventListener('submit', solveForX);

// ax + b = cx + d
let linearEl2, varA2, varB2, varC2, varD2, resultX2;
linearEl2 = document.getElementById('linearEquation2');
varA2 = document.getElementById('varA2');
varB2 = document.getElementById('varB2');
varC2 = document.getElementById('varC2');
varD2 = document.getElementById('varD2');
resultX2 = document.getElementById('resultX2');

function solveForX2(event) {
    const a = (varA2.value - varC2.value);
    const b = (varD2.value - varB2.value);
    solver(a, b, resultX2)

    event.preventDefault();
}

linearEl2.addEventListener('submit', solveForX2);
