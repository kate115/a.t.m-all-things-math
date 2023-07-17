let formEl, answerEl, resultEl, submitEl;
const answer = 75;

formEl = document.getElementById('quiz');
console.log(formEl);
answerEl = document.getElementById('answer');
console.log(answerEl);
resultEl = document.getElementById('result');
console.log(resultEl);

function checkAndWrite(event) {
    if(answerEl.value == answer) {
        console.log('User got it correct and answerEl has value ' + answerEl.value);
        resultEl.innerText = 'Great job! You got it correct!';
    } else {
        console.log('User got it incorrect and answerEl has value ' + answerEl.value);
        resultEl.innerText = 'Sorry, that was incorrect. Try again!';
    }
    event.preventDefault();
}

formEl.addEventListener('submit', checkAndWrite);