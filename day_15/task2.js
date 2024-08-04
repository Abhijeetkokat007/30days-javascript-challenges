function createCounter() {
    let counter = 0;
  
    function increment() {
      counter++;
    }
    function getValue() {
      return counter;
    }
  
    return {
      increment: increment,
      getValue: getValue
    };
  }
  
  const myCounter = createCounter();
  
  
  myCounter.increment();
  myCounter.increment();
  myCounter.increment();
  myCounter.increment();
  myCounter.increment();
  
  console.log(myCounter.getValue()); 
  