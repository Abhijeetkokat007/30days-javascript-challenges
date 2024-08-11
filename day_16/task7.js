function binarySearchRecursive(arr, target, low, high) {
   
    if (low > high) {
        return -1;
    }

    
    const mid = Math.floor((low + high) / 2);

    
    if (arr[mid] === target) {
        return mid;
    }
  
    else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    }
   
    else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}


function binarySearch(arr, target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}


const arr = [2, 3, 4, 10, 40];
console.log("Array:", arr);

const testCases = [10, 2, 40, 5];
testCases.forEach(target => {
    const index = binarySearch(arr, target);
    if (index !== -1) {
        console.log(`Element ${target} found at index ${index}`);
    } else {
        console.log(`Element ${target} not found in the array`);
    }
});
