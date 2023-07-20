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

// Linear Equations
let linearEl, varA, varB, result;
linearEl = document.getElementById('linearEquationSolve');
varA = document.getElementById('a');
varB = document.getElementById('b');
result = document.getElementById('resultEl');

varA.innerText = Math.floor(Math.random() * 100);
varB.innerText = Math.floor(Math.random() * 100);

function solver(a, b, el) {
    if(a != 0) {
        el.innerText = b/a;
    } else if(a == 0 && b != 0) {
        el.innerText = 'No Solutions';
    } else {
        el.innerText = 'Infinite Solutions';
    }
}

function solveForX(event) {
    solver(varA.innerText, varB.innerText, result);
    event.preventDefault();
}

linearEl.addEventListener('submit', solveForX);