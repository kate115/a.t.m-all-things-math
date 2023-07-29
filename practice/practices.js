// Addition
let formEl, answerEl, resultEl, addendOneEl, addendTwoEl, nextLink, answer;
addendOneEl = document.getElementById('addendOne');
addendTwoEl = document.getElementById('addendTwo');

nextLink = document.getElementById('nextQLink');
formEl = document.getElementById('quiz');
answerEl = document.getElementById('answer');
resultEl = document.getElementById('result');

function reset(addition, num1, num2, nextQ, result, answerElement) {
    num1.innerText = Math.floor(Math.random() * 100);
    num2.innerText = Math.floor(Math.random() * 100);
    nextQ.hidden = true;
    result.innerText = '';
    answerElement.value = '';
    console.log(answer);
    if(addition === true) {
        answer = parseInt(num1.innerText) + parseInt(num2.innerText);
    } else {
        answer2 = parseInt(num1.innerText) - parseInt(num2.innerText);
    }
}

function additionReset(event) {
    reset(true, addendOneEl, addendTwoEl, nextLink, resultEl, answerEl);

    if(event) {
        event.preventDefault();
    }
}
additionReset();

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
nextLink.addEventListener('click', additionReset);

// Subtraction Stuff
let formEl2, answerEl2, resultEl2, num1, num2, nextLink2, answer2;
num1 = document.getElementById('subtractNum1');

num2 = document.getElementById('subtractNum2');

nextLink2 = document.getElementById('nextQLink2');
formEl2 = document.getElementById('quiz2');
answerEl2 = document.getElementById('answer2');
resultEl2 = document.getElementById('result2');

function subtractionReset(event) {
    reset(false, num1, num2, nextLink2, resultEl2, answerEl2);

    if(event) {
        event.preventDefault();
    }
}
subtractionReset();

function checkAndWriteSub(event) {
    console.log(answer2)
    if(answerEl2.value == answer2) {
        console.log('User got it correct and answerEl has value ' + answerEl2.value);
        resultEl2.innerText = 'Great job! You got it correct!';
        nextLink2.hidden = false;
    } else {
        console.log('User got it incorrect and answerEl has value ' + answerEl2.value);
        resultEl2.innerText = 'Sorry, that was incorrect. Try again!';
    }
    event.preventDefault();
}

formEl2.addEventListener('submit', checkAndWriteSub);
nextLink2.addEventListener('click', subtractionReset);

// Multiplication
let formEl3, answerEl3, resultEl3, factor1, factor2, nextLink3, answer3;
factor1 = document.getElementById('factor1');

factor2 = document.getElementById('factor2');

nextLink3 = document.getElementById('nextQLink3');
formEl3 = document.getElementById('quiz3');
answerEl3 = document.getElementById('answer3');
resultEl3 = document.getElementById('result3');

function resetMultiply(event) {
    factor1.innerText = Math.floor(Math.random() * 10);
    factor2.innerText = Math.floor(Math.random() * 10);
    nextLink3.hidden = true;
    resultEl3.innerText = '';
    answerEl3.value = '';
    console.log(answer3);
    answer3 = parseInt(factor1.innerText) * parseInt(factor2.innerText);

    if(event) {
        event.preventDefault();
    }
}

resetMultiply();

function checkAndWriteMulti(event) {console.log(answer2)
    if(answerEl3.value == answer3) {
        console.log('User got it correct and answerEl has value ' + answerEl3.value);
        resultEl3.innerText = 'Great job! You got it correct!';
        console.log(answer3);
        nextLink3.hidden = false;
    } else {
        console.log('User got it incorrect and answerEl has value ' + answerEl3.value);
        resultEl3.innerText = 'Sorry, that was incorrect. Try again!';
        console.log(answer3);
    }

    event.preventDefault();
}

formEl3.addEventListener('submit', checkAndWriteMulti);
nextLink3.addEventListener('click', resetMultiply);

// Linear Equations
let linearEl, varA, varB, result, nextQLink, x;
linearEl = document.getElementById('linearEquationSolve');
varA = document.getElementById('a');
varB = document.getElementById('b');
result = document.getElementById('resultEl');
nextQLink = document.getElementById('nextLink');
x = document.getElementById('x');

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
    x.value = '';
}

resetVars();

function solveForX(event) {
    solver(varA.innerText, varB.innerText, result);
    nextQLink.hidden = false;
    event.preventDefault();
}

linearEl.addEventListener('submit', solveForX);
nextQLink.addEventListener('click', resetVars);