function createIDGenerator() {
    let lastID = 0;
  
    function generateID() {
      lastID++;
      return lastID;
    }
  
    return generateID;
  }
  
  const generateUniqueID = createIDGenerator();
  
  console.log(generateUniqueID()); 
  console.log(generateUniqueID()); 
  console.log(generateUniqueID()); 
  