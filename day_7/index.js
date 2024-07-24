


//  task : 2


//  task : 3




// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

console.log("task 1 :")
const studenBook = {
    title: "bushtree",
    author: "Abhijeet",
    year: 2024
}
console.log(studenBook)
// Task 2: Access and log the title and author properties of the book object.

console.log("task 2 :")
console.log("Title : ", studenBook.title)
console.log("Author :", studenBook.author)

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
// Log the result of calling the method
console.log("task 3 :")
// Define the book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,

    // Method to return a string with the book's title and author
    getTitleAndAuthor: function() {
        return `${this.title} by ${this.author}`;
    }
};


console.log(book.getTitleAndAuthor());
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log("task 4 :")
// Define the book object with an initial year
let books = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,

    // Method to get book info
    getBookInfo: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },

    // Method to update the year
    updateYear: function(newYear) {
        this.year = newYear;
    }
};

// Log the initial book object
console.log("Before update:", books);

// Call the method to update the year
books.updateYear(2024);

// Log the updated book object
console.log("After update:", books);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
// Define some book objects
console.log("task 5 : ")
let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

let book2 = {
    title: "omigo",
    author: "George Orwell",
    year: 1949
};

let book3 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
let library = {
    name: "City Library",
    books: [book1, book2, book3]
};

console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Task 6:")
console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
});
// Activity 4: The this Keyword


// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

console.log("task 7 :")
// Define the book objects with the new method
let book4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,

    // Method to return title and year
    getTitleAndYear: function() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
};

let book5 = {
    title: "1984",
    author: "George Orwell",
    year: 1949,

    // Method to return title and year
    getTitleAndYear: function() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
};

let book6 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    getTitleAndYear: function() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
};

console.log(book4.getTitleAndYear()); 
console.log(book5.getTitleAndYear()); 
console.log(book6.getTitleAndYear()); 


// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("Task 8:")

let book7 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};


for (let key in book) {
    if (book7.hasOwnProperty(key)) { 
        console.log(`${key}: ${book[key]}`);
    }
}


// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log("Task 9:")

let keys = Object.keys(book7);
console.log("Keys:", keys);

let values = Object.values(book7);
console.log("Values:", values);

