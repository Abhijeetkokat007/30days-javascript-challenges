// Function to count occurrences of a target element in an array
function countOccurrences(arr, target, index = 0) {
    // Base case: If index is beyond the array length, return 0
    if (index >= arr.length) {
        return 0;
    }

    // Check if current element matches the target
    const isMatch = arr[index] === target ? 1 : 0;

    // Recursive call to the next index
    return isMatch + countOccurrences(arr, target, index + 1);
}

const array1 = [1, 2, 3, 2, 4, 2];
const target1 = 2;
console.log(`Count of ${target1} in array1:`, countOccurrences(array1, target1)); 

// Test Case 2
const array2 = [5, 5, 5, 5, 5];
const target2 = 5;

// Test Case 3
const array3 = [1, 2, 3, 4, 5];
const target3 = 6;
console.log(`Count of ${target3} in array3:`, countOccurrences(array3, target3)); 

// Test Case 4
const array4 = [];
const target4 = 1;
console.log(`Count of ${target4} in array4:`, countOccurrences(array4, target4)); 