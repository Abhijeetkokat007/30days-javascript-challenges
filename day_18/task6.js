function countCharacterOccurrences(str) {
    const charCount = {};

    for (let char of str) {

        if (charCount[char]) {
            charCount[char]++;
        } else {
           
            charCount[char] = 1;
        }
    }

    return charCount;
}


const inputString = "hello world";
const characterCounts = countCharacterOccurrences(inputString);
console.log("Character Counts:", characterCounts);
