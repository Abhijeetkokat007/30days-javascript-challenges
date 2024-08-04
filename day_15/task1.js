
function outerFunction(outerVariable) {
   
    function innerFunction() {
      return `The outer variable is: ${outerVariable}`;
    }
    
    return innerFunction;
  }
  const myInnerFunction = outerFunction('Hello I am Abhijeet Kokat');
  
  console.log(myInnerFunction());
  