const add = function(num1, num2) {
    return num1 + num2;
};
  
const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator == 'add') {
        return add(num1, num2);
    } else if (operator == 'subtract') {
        return subtract(num1, num2);
    } else if (operator == 'multiply') {
        return multiply(num1, num2);
    } else if (operator == 'divide') {
        return divide(num1, num2);
    }
}

function populateDisplay(output) {
    display.textContent += output; 

}
function clearDisplay() {
    display.textContent = ''
}

const display = document.querySelector('.display')
const button0 = document.querySelector('#button0')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')
const button6 = document.querySelector('#button6')
const button7 = document.querySelector('#button7')
const button8 = document.querySelector('#button8')
const button9 = document.querySelector('#button9')
const buttonClear = document.querySelector('#buttonClear')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const product = document.querySelector('#product')
const divisor = document.querySelector('#divisor')
const equals = document.querySelector('#equals')



button0.addEventListener('click', () => {
    populateDisplay('0');
});
button1.addEventListener('click', () => {
    populateDisplay('1');
});
button2.addEventListener('click', () => {
    populateDisplay('2');
});
button3.addEventListener('click', () => {
    populateDisplay('3');
});
button4.addEventListener('click', () => {
    populateDisplay('4');
});
button5.addEventListener('click', () => {
    populateDisplay('5');
});
button6.addEventListener('click', () => {
    populateDisplay('6');
});
button7.addEventListener('click', () => {
    populateDisplay('7');
});
button8.addEventListener('click', () => {
    populateDisplay('8');
});
button9.addEventListener('click', () => {
    populateDisplay('9');
});
buttonClear.addEventListener('click', () => {
    clearDisplay();
});
equals.addEventListener('click', () => {
    secondNumber = display.textContent;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    display.textContent = (operate(firstNumber, secondNumber, currentOperator));

})
plus.addEventListener('click', () => {
    firstNumber = display.textContent;
    currentOperator = 'add';
    clearDisplay();
})
minus.addEventListener('click', () => {
    firstNumber = display.textContent
    currentOperator = 'subtract';
    clearDisplay();
})

let currentOperator = '';
let firstNumber = null;
let secondNumber = null;

