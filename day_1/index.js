// Day 1 : Variable and data types 

// Activity 1 : variable declaration 

// task 1: declear a variable using var  , asign the number , and log the console,
var task1 = 1;
console.log(task1)

// task 2: declear a variable using let  , asign the string , and log the console.
let task2 = 'abhijeet';
console.log(task2)

//  Activity 2 : constant declaration

// task 3: declear a variable using const  , asign the boolean ,and log the console.
const task3 = true;
console.log(task3)

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

console.log("task 1 type = ", typeof (task1));
console.log("task 2 type = ", typeof (task2));
console.log("task 3 type = ", typeof (task3));

const object = {
    name: 'Abhijeet',
    rollno: '007',
    address: 'pune , Maharashtra'
}

console.log('object data = ', object, " type = ", typeof (object));

const arraydata = [
    { name: 'Abhijeet' },
    { rollno: '007' },
    { address: 'pune , Maharashtra' }
]

console.log('Arraydata =', arraydata, " type = ", typeof (arraydata));




// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let task5 = 11;
console.log('first value =', task5)
task5 = 12;
console.log('second value =', task5)

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.


const task6= "Abhijeet";
console.log('task6=' , task6);
//error const variable can not be reassigned.

// task6 = 11;
// console.log('task6=' , task6);


// Day 1 complete 😎