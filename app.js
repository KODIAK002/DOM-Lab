/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let displayValue = '0';
let num1 = null;
let operator = null;
let secondOperandIsSelected = false;

display.textContent = displayValue;

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {

    if (event.target.classList.contains('number')) {
      if (secondOperandIsSelected) {
        displayValue = event.target.innerText;
        secondOperandIsSelected = false;
      } else {
        if (displayValue === '0'){
            displayValue = event.target.innerText
        } else {
            displayValue = displayValue + event.target.innerText
        }
      }

    }


    if (event.target.classList.contains('operator')) {
      if (event.target.innerText === 'C') {
        displayValue = '0';
        num1 = null;
        operator = null;
        secondOperandIsSelected = false;
      } else {
        num1 = parseInt(displayValue); // allows for integer calculation so its not a string
        operator = event.target.innerText;
        secondOperandIsSelected = true;
      }
    }

    if (event.target.classList.contains('equals')) {
      if (operator && num1 !== null) {
        const num2 = parseInt(displayValue); // allows for integer calculation so its not a string, parseInt came from stack overflow

        if (operator === '+') {
            result = num1 + num2;
        }
        if (operator === '-') {
            result = num1 - num2;
        }
        if (operator === '*') {
            result = num1 * num2;
        }
        if (operator === '/') {
          if (num2 !== 0) {
            result = Math.floor(num1 / num2); // Got from stack overflow to be able to use integer math as I also didnt want floating point or anything fancy
          }else {
            result = 'Error'
          }
        }
        }
        displayValue = String(result);
      }
      display.textContent = displayValue; // After every event happens it will dislay the numbers clicked
    });
});

  /*-------------------------------- Functions --------------------------------*/
