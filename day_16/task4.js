function findMax(arr, n) {
   
    if (n === 1) {
        return arr[0];
    }

   
    let maxOfRest = findMax(arr, n - 1);

    return arr[n - 1] > maxOfRest ? arr[n - 1] : maxOfRest;
}

let arr1 = [1, 5, 3, 9, 2];
let arr2 = [-1, -5, -3, -9, -2];
let arr3 = [10];
let arr4 = [];

console.log("Max of arr1:", findMax(arr1, arr1.length)); 
console.log("Max of arr2:", findMax(arr2, arr2.length)); 
console.log("Max of arr3:", findMax(arr3, arr3.length)); 
console.log("Max of arr4:", arr4.length > 0 ? findMax(arr4, arr4.length) : "Array is empty"); 
