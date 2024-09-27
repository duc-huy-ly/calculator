function add(a, b) {
  return a + b;
}

function subtract(a,b){
  return a- b;
}
function multiply(a,b){
  return a * b;

}
function divide(a,b){
  return a/b; // what happens if we give 0?
}

function operate(a, b, op){
  switch (op) {
    case "+":
      add(a,b)
      break;
    case "-":
      subtract(a,b);
      break;
    case "*":
      multiply(a,b);
      break;
    case "/":
      divide(a,b)
      break;
    default:
      break;
  }
}
let a;
let operator;
let b;

let numberContainer = document.getElementById("numbers");

for (let i = 0; i <= 9; i++) {
  // Create a new button element
  let button = document.createElement('button');
  
  // Add the 'number' class to the button
  button.classList.add('number');
  
  // Set the button text content to indicate which button it is
  button.textContent = `${i}`;
  
  // Append the button to the body
  numberContainer.appendChild(button);
}