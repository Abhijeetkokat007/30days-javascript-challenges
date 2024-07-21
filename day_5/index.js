// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
console.log('task 1 : ')
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} is even.`);
    } else {
      console.log(`${number} is odd.`);
    }
  }
  checkEvenOdd(24)
  checkEvenOdd(4);  
  checkEvenOdd(7); 
// Task 2: Write a function to calculate the square of a number and return the result.
console.log('task 2 : ')
function checkEvenOdd(number) {

    const square = number * number
      console.log(  ` the number ${number}  square is ${square} .`);
    
  }
  checkEvenOdd(24)
  checkEvenOdd(4);  
  checkEvenOdd(7); 
// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
console.log('task 3 : ')
const findMax = function(num1, num2) {
    const max = (num1 > num2) ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}.`);
  };
  findMax(10, 20);
  findMax(5, 9); 

// Task 4: Write a function expression to concatenate two strings and return the result.
console.log('task 4 : ')
const twoString = function(string1, string2) {
    const mix = (string1 + ' ' + string2) 
    console.log(` ${mix} `);
  };
  twoString('Abhijeet', 'kokat');
  twoString("school", 'bus'); 

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
console.log('task 5 : ')
const arrowFunction = (num3, num4 ) => {
const sum = (num3 +  num4 )
console.log(`The sum of ${num3} and ${num4} is ${sum}.`);
}

arrowFunction( 25, 31)
arrowFunction( 11, 41)
arrowFunction( 8, 7)

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
console.log('task 6 : ')
const containsCharacter = (str, char) => {
    return str.includes(char);
  };
  console.log(containsCharacter("hello", "e")); 
  console.log(containsCharacter("Abhijeet", "k")); 

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
console.log('task 7 : ')
function multiply(num1, num2 = 1) {
    return num1 * num2;
  }
  console.log(multiply(5, 3));  
  console.log(multiply(7));

//• Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
console.log('task 8 : ')
function greet(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  
  // Example usage:
  console.log(greet("Abhijeet", 22));  
  console.log(greet("John"));  
// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
console.log('task 9 : ')
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
      fn();
    }
  }
  const sayHello = () => {
    console.log("Abhijeet..");
  };
  
  repeatFunction(sayHello, 3);


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

console.log('task 10 : ')
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  const addFive = (num) => num + 5;
  const square = (num) => num * num;
  const result = applyFunctions(addFive, square, 2);
  console.log(result);