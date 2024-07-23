// Day 6: Arrays


// Tasks/Activities:
// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.log("Task 1 : ")
const number = [1, 2, 3, 4, 5]
console.log(number)

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("Task 2 : ")
console.log(number[0]);
console.log(number[number.length-1]);
console.log(number.length)

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

console.log("Task 3 : ")
number.push(11)
console.log(number)


// Task 4: Use the pop method to remove the last element from the array and log the updated array.

console.log("Task 4 : ")
number.pop(11)
console.log(number)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

console.log("Task 5 : ")
number.shift()
console.log(number)

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

console.log("Task 6 : ")
number.unshift( 12)
console.log(number)


// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
// Create a new array with each number doubled
console.log("Task 7 : ")
let doubledArray = number.map(function(num) {
  return num * 2;
});

console.log("Doubled array:", doubledArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

console.log("Task 8 : ")
console.log(number)
let filterArray = number.filter(function(num) {
    return num % 2 === 0;
  });
  
  console.log("Filter array:", filterArray);
// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

console.log("Task 9 : ")
console.log(number)
let sumArray = number.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
  
  console.log("sum array:", sumArray);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Task 10 : ")
console.log(number)
for (let i = 0; i < number.length; i++) {
    console.log("Element at index", i, ":", number[i]);
}


// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Task 11 : ")
console.log(number)
number.forEach(function(element, index) {
    console.log("Element at index", index, ":", element);
  });

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Define the two-dimensional array (matrix)
console.log("Task 12 : ")
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Log the entire array to the console
  console.log("Matrix:", matrix);

  
// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Task 13 : ")
let specificElement = matrix[0][0];

console.log("Specific element at row 1, column 2:", specificElement);