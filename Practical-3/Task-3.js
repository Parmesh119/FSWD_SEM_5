const prompt = require('prompt-sync')()
let age=prompt('Enter your age: ')

if(age < 18){
     console.log('You are a minor')
}else if(age >= 18 && age < 60){
     console.log('You are a adult')     
}else[
     console.log('You are a senior citizen')
]