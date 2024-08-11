function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


console.log("Fibonacci of 5 is:", fibonacci(5));  
console.log("Fibonacci of 7 is:", fibonacci(7));  
console.log("Fibonacci of 10 is:", fibonacci(10)); 
