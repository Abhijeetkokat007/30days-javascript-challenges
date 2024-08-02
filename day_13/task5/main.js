// main.js

// Importing the entire module as an object
const myModule = require('./myModule');

// Using the properties of the imported module
console.log(`Value of PI: ${myModule.PI}`);
console.log(`Value of E: ${myModule.E}`);

console.log(`Add: ${myModule.add(5, 3)}`);
console.log(`Subtract: ${myModule.subtract(5, 3)}`);
console.log(`Multiply: ${myModule.multiply(5, 3)}`);
console.log(`Divide: ${myModule.divide(5, 3)}`);
