// Array of favorite books

const favoriteBooks = [
     "To Kill a Mockingbird",
     "1984",
     "Pride and Prejudice",
     "The Great Gatsby", 
     "The Catcher in the Rye"
];

// Function to display each book title on a separate line

function displayBooks(bookArray) {
     for(let i = 0; i < bookArray.length; i++) {
          console.log(bookArray[i]);
     }
}

// Call the function with the array of favorite books

displayBooks(favoriteBooks);