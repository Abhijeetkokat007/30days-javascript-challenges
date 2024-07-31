// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 
console.log("task 1:" )
function throwErrorFunction() {
    try {
        
        throw new Error("This is an intentional error!");
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}


throwErrorFunction();


//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
console.log("task 2:" )
function divideNumbersfunction(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }

        const result = numerator / denominator;
        return result;
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}


const num1 = 10;
const num2 = 0;

const result = divideNumbersfunction(num1, num2);
if (result !== undefined) {
    console.log(`Result: ${result}`);
}


// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
console.log("task 3:" )

function executeWithTryCatchFinally() {
    try {
        console.log("In the try block.");
        throw new Error("This is an intentional error!");

        console.log("This line will not be executed.");
    } catch (error) {
        console.log("In the catch block.");
        console.error("An error occurred: ", error.message);
    } finally {
        console.log("In the finally block.");
    }
}

executeWithTryCatchFinally();



// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

console.log("task 4:" )
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function functionThatThrowsCustomError() {
    try {
        throw new CustomError("This is a custom error message.");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error(`Custom error caught: ${error.message}`);
        } else {
            console.error(`An unexpected error occurred: ${error.message}`);
        }
    }
}

functionThatThrowsCustomError();



// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

console.log("task  5 :")
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUserInput(input) {
    if (input === undefined || input === null || input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
    }
    return true;
}

function getUserInput() {
    try {
        const userInput = "Abhijeet"; 

        validateUserInput(userInput);

        console.log("User input is valid.");
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(`Validation error: ${error.message}`);
        } else {
            console.error(`An unexpected error occurred: ${error.message}`);
        }
    }
}
getUserInput();


// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. 
console.log("task 6 : ")
function randomResolveReject() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random) {
            console.log(random)
            resolve("Promise resolved successfully." );
        } else {
            reject(new Error("Promise rejected."));
        }
    });
}

randomResolveReject()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred: ", error.message);
    });


//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
console.log("task 7 : ")
function randomResolveReject() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            resolve("Promise resolved successfully.");
        } else {
            reject(new Error("Promise rejected."));
        }
    });
}

async function handlePromise() {
    try {
        const message = await randomResolveReject();
        console.log(message);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
}
handlePromise();


// Activity 5: Graceful Error Handling in Fetch


// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

console.log("task 8 : ")
function fetchData() {
    const invalidUrl = "https://invalidurl.example.com";

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
        })
        .catch(error => {
            console.error("An error occurred while fetching data:", error.message);
        });
}


fetchData();


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

console.log("task 9 : ")

async function fetchData() {
    const invalidUrl = "https://invalidurl.example.com";

    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data fetched successfully:", data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    }
}

fetchData();

