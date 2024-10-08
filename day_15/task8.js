function memoize(fn) {
   
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        console.log('Fetching from cache:', key);
        return cache[key];
      }
  
      console.log('Computing new result for:', key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(6)); 
  console.log(memoizedFactorial(6)); 
  