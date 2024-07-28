// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.



const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
