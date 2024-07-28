// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved value!");
    }, 2000);
});

async function waitForPromise() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

waitForPromise();
