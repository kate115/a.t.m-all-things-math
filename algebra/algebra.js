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
        el.innerText = 'No Solutions';
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

// Two-Var Linear Equations code
let linearEl3, varA3, varB3, varC3, varD3, varE3, varF3, resultX3;
linearEl3 = document.getElementById('linearEquation3');
a = document.getElementById('varA3');
b = document.getElementById('varB3');
c = document.getElementById('varC3');
d = document.getElementById('varD3');
e = document.getElementById('varE3');
f = document.getElementById('varF3');
resultX = document.getElementById('resultX3');
resultY = document.getElementById('resultY3');

function solveForXY(event) {
    const variableY = d.value * b.value - a.value * e.value;
    const constantY = d.value * c.value - a.value * f.value;

    solver(variableY, constantY, resultY);

    const variableX = a.value * e.value - d.value * b.value;
    const constantX = c.value * e.value - f.value * b.value;

    solver(variableX, constantX, resultX);

    event.preventDefault();
}

linearEl3.addEventListener('submit', solveForXY);