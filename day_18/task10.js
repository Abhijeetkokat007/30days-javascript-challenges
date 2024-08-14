function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib = [0, 1]; 

    for (let i = 2; i < n; i++) {
       
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}


const n = 10; 
const fibonacciNumbers = fibonacci(n);
console.log("Fibonacci Numbers:", fibonacciNumbers);
