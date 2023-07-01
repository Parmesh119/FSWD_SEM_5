const prompt = require('prompt-sync')()

function error(num){
     try{
          if(num > 0){
               console.log("Fine")
          }else{
               throw new Error("Number cannot be negative")
          }
     }catch(e){
          console.log(e)
     }
}

let n=prompt('Enter a number: ')
error(n)