function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}


const array = [64, 25, 12, 22, 11];
const targetValue = 22;
const index = linearSearch(array, targetValue);
console.log("Index of target value :", index);
