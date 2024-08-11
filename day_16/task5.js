function reverseString(str) {
    if (str === "") {
        return "";
    }

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log("Reversed 'hello':", reverseString("hello")); 
console.log("Reversed 'world':", reverseString("world")); 
console.log("Reversed 'Abhijeet':", reverseString("Abhijeet")); 
console.log("Reversed '':", reverseString("")); 
console.log("Reversed 'a':", reverseString("a")); 
