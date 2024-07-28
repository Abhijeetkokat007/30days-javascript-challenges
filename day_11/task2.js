// ask 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Oops, something went wrong!");
    }, 2000);
});

myPromise.then(message => {
    console.log(message);
}).catch(error => {
    console.error(error);
});


