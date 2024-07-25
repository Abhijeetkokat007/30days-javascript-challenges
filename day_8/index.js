const otp = Math.floor(Math.random() * 1000000);

console.log("your one time password : " , otp)



// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
//  Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
 console.log("Task 1:")
const name = "Abhijeet";
const age = 22;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);



// Task 2: Create a multi-line string using template literals and log it to the console.
console.log("Task 2 :")
const multiLineString = `
This is a multi-line string.
It can span multiple lines
without needing any special characters.
You can just type as you would in a normal text editor.`;


console.log(multiLineString);



// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log("Task 3 :")

const numbers = [10, 20, 30, 40, 50];

const [first, second, third, forth, fifth] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);
console.log(`third element: ${third}`);
console.log(`forth element: ${forth}`);
console.log(`fifth element: ${fifth}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
console.log("Task 4 :")

const newobject = {
    title: "the good thing",
    author: "Abhijeet"
}

const {title, author} = newobject;

console.log(`First element: ${title}`);
console.log(`Second element: ${author}`);


// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log("Task 5 :")
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

const newArray = [...firstArray, ...secondArray];


console.log(newArray);


// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log("Task 6 :")
function sum(...numbers) {
    return numbers.reduce((value, currentValue) => value + currentValue, 0);
}

const result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("Sum : " , result);  


// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
console.log("Task 7 :")

 const newfunction = (value1 , value2 = 1) =>{
 return (
    console.log(`The ${value1} sets available is ${value2} packats.`)
 ) 
 }
  newfunction("Catbary", 3);
  newfunction("choclet");
//  console.log(`Result with both parameters: ${result1}`)


// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log("Task 8 :")
const propertyName = 'color';
const propertyValue = 'red';

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    [propertyName]: propertyValue,

   
    start() {
        console.log('Car started');
    },
    stop() {
        console.log('Car stopped');
    },

    ['drive']() {
        console.log('Car is driving');
    }
};

console.log(car);
car.start();
car.stop();
car.drive();



// Task 9: Create an object with computed property names based on variables and log the object to the console.
console.log("Task 9 :")


const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const person = {
    [key1]: 'Abhijeet',
    [key2]: 'Kokat',
    [key3]: 22
};

console.log(person);


