

// Importing the axios module
const axios = require('axios');

// Making a GET request to a public API
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
