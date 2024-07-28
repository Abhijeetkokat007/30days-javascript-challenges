// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.



const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data from server 1");
            resolve("Data 1");
        }, 1000);
    });
};

const fetchData2 = (prevData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data from server 2");
            resolve(`${prevData} + Data 2`);
        }, 2000);
    });
};

const fetchData3 = (prevData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched data from server 3");
            resolve(`${prevData} + Data 3`);
        }, 3000);
    });
};

fetchData1()
    .then(data1 => fetchData2(data1))
    .then(data2 => fetchData3(data2))
    .then(finalData => {
        console.log("All data fetched and combined:", finalData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });




