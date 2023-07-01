const prompt = require('prompt-sync')()
function sum(num1, num2){
     return num1 + num2;
}

function Subtraction(num1, num2){
     return num1 - num2;
}

function Multiplication(num1, num2){
     return num1 * num2;
}

function Division(num1, num2){
     if(num2 != 0){
          return num1 / num2;
     }
}

let num1=prompt('Enter number1: ')
let num2=prompt('Enter number2: ')

console.log(sum(num1, num2))
console.log(Subtraction(num1, num2))
console.log(Multiplication(num1, num2))
console.log(Division(num1, num2))