
function
 
simulateAsyncOperation
(
callback
) {
  
// Simulate an asynchronous operation using setTimeout

  
setTimeout
(
() =>
 {
    
// Assuming the operation takes 2 seconds, we'll pass the result after that time

    
const
 result = 
"Async operation completed"
;
    
callback
(
null
, result); 
// Pass the result to the callback

  }, 
2000
);
}

// Example usage of the simulateAsyncOperation function

console
.
log
(
"Start of the program"
);

// Call the simulateAsyncOperation function and provide a callback function to handle the result

simulateAsyncOperation
(
(
error, result
) =>
 {
  
if
 (error) {
    
console
.
error
(
"Error:"
, error);
  } 
else
 {
    
console
.
log
(
"Result:"
, result);
  }
});

console
.
log
(
"End of the program"
);