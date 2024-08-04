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
  
  function slowFunction(x, y) {
    for (let i = 0; i < 1e6; i++) {}
    return x + y;
  }
  
  const memoizedSlowFunction = memoize(slowFunction);
  
  console.log(memoizedSlowFunction(3, 4)); 
  console.log(memoizedSlowFunction(3, 4)); 
  console.log(memoizedSlowFunction(5, 6)); 
  console.log(memoizedSlowFunction(5, 6));
  