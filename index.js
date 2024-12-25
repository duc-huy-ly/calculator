var operation;
var a;
var b;
let flag = true;

const display = document.getElementById("display");

function appendToDisplay(input) {
  if(!flag){
    flag = true;
    display.value = "";
  }
  display.value += input;
}


function clearDisplay() {
  display.value = "";
  flag = true;
}

function calculate() {
  
    // Regular expression to match "a operator b"
    const regex = /^(-?\d+)\s*([\+\-\*\/])\s*(-?\d+)$/;

    const match = display.value.match(regex);

    if (!match) {
        display.value = "syntax error";
        flag = false;
    }

    // Extract parts
    const a = parseFloat(match[1]);
    const operation = match[2];
    const b = parseFloat(match[3]);

    display.value = operate(operation, a,b);
    flag =false;
}

function setOp(op) {
  a = display.value;
  operation = op;
  display.value ="";
  isNewInput = false;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0){ return console.error("can't divide by 0");
  }
  return a / b;
}

function operate(op, a, b) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
    default:
      break;
  }
}