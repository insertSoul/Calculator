let firstNumber = null;
let secondNumber = null;
let currentOperator = '';
let currentAnswer = null;
let operatorPressedLast = false; //used for changing operator mid calculation

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
function populateDisplay(output) {
    if (currentAnswer) {
        clearDisplay();
        firstNumber = currentAnswer;
        currentAnswer = null;
    } 
    display.textContent += output;
    operatorPressedLast = false;
}

function clearDisplay() {
    display.textContent = ''
}

function clearAll() {
    clearDisplay();
    firstNumber = null;
    secondNumber = null;
    currentOperator = '';
    currentAnswer = null;
    operatorPressedLast = false;
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

function onOperatorClick(operatorPressed) {
    if (operatorPressedLast == true) {
        return currentOperator = operatorPressed;
    }
    if (currentOperator == false) {
        firstNumber = display.textContent;
        currentOperator = operatorPressed;
        clearDisplay();
    } else {
        calculateAndDisplay();
        firstNumber = null;
        currentOperator = operatorPressed;
    }
    operatorPressedLast = true;
}

function calculateAndDisplay() {
    secondNumber = display.textContent;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    currentAnswer = (operate(firstNumber, secondNumber, currentOperator));
    roundedAnswer = Math.round(currentAnswer * 10) / 10
    display.textContent = roundedAnswer;
};

function onEquals() { // reset calculator to state to carry on calculating 
    currentOperator = ''
    secondNumber = currentAnswer;
    firstNumber = null;
}

function changeOfSign() {
    let tempNumber = Number(display.textContent)
    if (tempNumber > 0) {
        display.textContent = -Math.abs(tempNumber)
    } else {
        display.textContent = Math.abs(tempNumber)
    }
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
const decimalPoint = document.querySelector('#decimalPoint')
const buttonClear = document.querySelector('#buttonClear')
const plusMinus = document.querySelector('#plusOrMinus')
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
decimalPoint.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        // do nothing
    } else {
    populateDisplay('.');
    }
})
plusMinus.addEventListener('click', changeOfSign)
buttonClear.addEventListener('click', () => {
    clearAll();
});

equals.addEventListener('click', () => {
    calculateAndDisplay();
    onEquals();
});

plus.addEventListener('click', () => onOperatorClick('add'));
minus.addEventListener('click', () => onOperatorClick('subtract'));
product.addEventListener('click', () => onOperatorClick('multiply'));
divisor.addEventListener('click', () => onOperatorClick('divide'));


