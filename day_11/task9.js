// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1000);
});

Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log("First resolved promise value:", value);
    })
    .catch(error => {
        console.error('One of the promises rejected:', error);
    });
