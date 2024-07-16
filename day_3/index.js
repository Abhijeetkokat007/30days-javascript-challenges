// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
let num = 21 ;
if (num < 0){
    console.log('task 1 : number is Negative')
} 
else if (num > 0) {
    console.log('task 1 : number is positive')
} else {
    console.log('task 1 : number is Zero')
}
//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age =20;
if (age >= 18) {
    console.log('task 2 :  this person is eligible to vote')
} else {
    console.log('task 2 :  this person is not eligible to vote')
}

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 56 ;
let num2 = 97 ;

if (num > num1) {
    if (num > num2) {
        console.log("task 3 : 21 is larg number")
    } else {
        console.log("task 3 : 97 is larg number")
    } 
} 
else if (num1 > num2){
    console.log("task 3 : 56 is larg number")
}
else {
    console.log("task 3 : 97 is larg number")
}


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
console.log("task 4 :")
function getDayName(dayNum) {
    switch(dayNum) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number. Please enter a valid number between only  1 to 7.");
            break;
    }
}


getDayName(2); 
getDayName(6); 
getDayName(8); 

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
console.log("task 5 : ")
function getGread(marks) {
    switch(true) {
        case (marks >= 90 && marks <= 100):
            console.log("Gread A");
            break;
        case (marks >= 80 && marks <= 90):
            console.log("Gread B");
            break;
        case (marks >= 70 && marks <= 80):
            console.log("Gread C");
            break;
        case (marks >= 60 && marks <= 70):
            console.log("Gread D");
            break;
        case (marks >= 0 && marks <= 60):
            console.log("Gread F");
            break;
        default:
            console.log("Invalid score. Please enter a score between 0 and 100.");
            break;
    }
}


getGread(100); 
getGread(35); 
getGread(8); 
getGread(118); 

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
 result = (num2 % 2 === 0) ? 'Even' : 'Odd';
    console.log(`task 6 : The number ${num2} is ${result}.`);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year) {
    let isLeap;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeap = true;
    } else {
        isLeap = false;
    }
    console.log(`The year ${year} is ${isLeap ? 'a leap year' : 'not a leap year'}.`);
}


isLeapYear(2015); 
isLeapYear(2009); 
isLeapYear(2000); 
isLeapYear(2024); 



// compleate day 3 challenges 😎



