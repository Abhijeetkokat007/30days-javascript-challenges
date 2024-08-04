function createFunctionArray() {
    const functionArray = [];
  
    for (let i = 0; i < 10; i++) {
      functionArray.push((function(index) {
        return function() {
          console.log(index);
        };
      })(i));
    }
  
    return functionArray;
  }
  
  const functions = createFunctionArray();
  
  for (let j = 0; j < functions.length; j++) {
    functions[j](); 
  }
  