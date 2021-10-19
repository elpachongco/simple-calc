/* TODO: 
   1. Handle del
   2. Handle negative numbers

*/

let expression = document.querySelector('.expression'); 
let answer = document.querySelector('.answer');

let buttons_div = document.querySelector('.buttons');
buttons = buttons_div.querySelectorAll('button');

let firstOperand;
let operand = ''; 
let operation;
let prevAns; 
let expressionString = '';

answer.textContent = '0';
expression.textContent = '0';

for (let button of buttons){
   button.onclick = () => {
      if (button.className === 'digit' || button.className === 'digit zero') {
         let button_digit = button.textContent;
         operand += button_digit;
         expression.textContent = expressionString + operand;
         // console.log(operand);
         answer.textContent = '0';
      }
      else if (button.className === 'operator') {
         operation = button.textContent;
         expressionString += operand + ' ' + operation + ' ';
         expression.textContent = expressionString;
         firstOperand = Number(operand);
         operand = '';
         // console.log(firstOperand);
      }
      else if (button.className === 'equals') {
         if (operation === "+") {
         answer.textContent = firstOperand + Number(operand);
         }
         else if (operation === "-") {
            answer.textContent = firstOperand - Number(operand);
         }
         else if (operation === "×") {
            answer.textContent = firstOperand * Number(operand);
         }
         else if (operation === "/") {
            answer.textContent = firstOperand / Number(operand);
         }
         operand = '';
         operation = '';
         firstOperand = '';
         // expression.textContent = '0';
         prevAns = answer.textContent;
         expressionString = '';
      }
      else if (button.className == 'clear' || button.className == 'delete') {
         operand = '';
         operation = '';
         firstOperand = '';
         expressionString = ''
         expression.textContent = '0';

      };
   };
};


