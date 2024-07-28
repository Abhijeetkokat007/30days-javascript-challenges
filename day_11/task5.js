// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This is the error message!");
    }, 2000);
});

async function handleRejectedPromise() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleRejectedPromise();
