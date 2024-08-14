function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        
        if (charIndexMap.has(currentChar)) {
            start = Math.max(charIndexMap.get(currentChar) + 1, start);
        }

        
        charIndexMap.set(currentChar, end);

        
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}


const inputString = "abcabcbb";
const longestSubstringLength = lengthOfLongestSubstring(inputString);
console.log("Length of longest substring without repeating characters:", longestSubstringLength);
