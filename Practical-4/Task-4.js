const prompt = require('prompt-sync')()

let array = []

for (let i = 0; i < 5; i++) {
     let salary = prompt('Enter salary: ')
     array.push(salary)
}

array.sort((a, b) => a - b);
console.log(array[0], " ", array[array.length - 1])