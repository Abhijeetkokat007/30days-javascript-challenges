function createGreeter(userName) {
    function greet() {
      return `Hello, ${userName}!`;
    }
  
    return greet;
  }
  
  const greetAbhijeet = createGreeter('Abhijeet');
  
  console.log(greetAbhijeet()); 
  