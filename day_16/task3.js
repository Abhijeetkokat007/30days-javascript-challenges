function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}


console.log("Sum of [1, 2, 3, 4, 5] is:", sumArray([1, 2, 3, 4, 5])); 
console.log("Sum of [10, 20, 30] is:", sumArray([10, 20, 30]));        
console.log("Sum of [] is:", sumArray([]));                            
console.log("Sum of [7, -3, 2, 8, -5] is:", sumArray([7, -3, 2, 8, -5])); 
