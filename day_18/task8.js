function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    
    const rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
    return rotatedArray;
}


const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(array, k);
console.log("Rotated Array:", rotatedArray);
