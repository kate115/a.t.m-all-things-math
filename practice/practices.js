let formEl, answerEl, resultEl, addendOneEl, addendTwoEl, nextLink, answer;
addendOneEl = document.getElementById('addendOne');
console.log(addendOneEl);

addendTwoEl = document.getElementById('addendTwo');
console.log(addendTwoEl);

nextLink = document.getElementById('nextQLink');
console.log(nextLink);
formEl = document.getElementById('quiz');
console.log(formEl);
answerEl = document.getElementById('answer');
console.log(answerEl);
resultEl = document.getElementById('result');
console.log(resultEl);

// Answer Check code
function reset() {
    addendOneEl.innerText = Math.floor(Math.random() * 100);
    addendTwoEl.innerText = Math.floor(Math.random() * 100);
    nextLink.hidden = true;
    resultEl.innerText = '';
    answerEl.value = '';
    answer = parseInt(addendOneEl.innerText) + parseInt(addendTwoEl.innerText);
    console.log(answer);
}

reset();

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
nextLink.addEventListener('click', reset);

// Linear Equations
let linearEl, varA, varB, result, nextQLink;
linearEl = document.getElementById('linearEquationSolve');
varA = document.getElementById('a');
varB = document.getElementById('b');
result = document.getElementById('resultEl');
nextQLink = document.getElementById('nextLink');


function solver(a, b, el) {
    if(a != 0) {
        el.innerText = b/a;
    } else if(a == 0 && b != 0) {
        el.innerText = 'No Solutions';
    } else {
        el.innerText = 'Infinite Solutions';
    }
}

function resetVars() {
    varA.innerText = Math.floor(Math.random() * 100);
    varB.innerText = Math.floor(Math.random() * 100);
    result.innerText = '';
    nextQLink.hidden = true;
}

resetVars();

function solveForX(event) {
    solver(varA.innerText, varB.innerText, result);
    event.preventDefault();
}

linearEl.addEventListener('submit', solveForX);
nextQLink.addEventListener('click', resetVars);