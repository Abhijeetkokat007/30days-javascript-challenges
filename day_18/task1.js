function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
       
        n--;
    } while (swapped);
    return arr;
}

const array = [64, 104, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log("Sort Array : ", sortedArray);
