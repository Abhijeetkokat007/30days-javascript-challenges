class Queue {
    constructor() {
        this.items = [];  
    }

    
    enqueue(element) {
        this.items.push(element);
    }

    
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items.shift();  
    }

    
    front() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[0];  
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }

        console.log(this.items.join(" -> "));
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();  

console.log(queue.front());  

queue.dequeue();
queue.display();  

queue.dequeue();
queue.display();  

queue.dequeue();
queue.display();  
