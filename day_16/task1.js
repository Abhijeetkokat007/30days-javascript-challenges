function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


console.log("Factorial of 21 is:", factorial(21)); 
console.log("Factorial of 7 is:", factorial(7));  
console.log("Factorial of 10 is:", factorial(10)); 
