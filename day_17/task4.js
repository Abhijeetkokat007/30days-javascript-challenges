class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(inputString) {
    const stack = new Stack();
    let reversedString = '';

    for (let char of inputString) {
        stack.push(char);
    }

    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

const originalString = "Abhijeet";
const reversed = reverseString(originalString);
console.log(reversed);  
