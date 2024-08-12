class Stack {
    constructor() {
        this.items = [];  
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return;
        }

        console.log(this.items.join(" -> "));
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();  

console.log("consol = " + stack.peek());  

stack.pop();
stack.display();  

stack.pop();
stack.display();  

stack.pop();
stack.display();  
