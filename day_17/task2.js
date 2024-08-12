class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;  
    }

    
    add(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;  
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;  
            }

            current.next = newNode;  
        }
    }

    
    remove() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null; 
        } else {
            let current = this.head;

            while (current.next.next !== null) {
                current = current.next;  
            }

            current.next = null;  
        }
    }

    display() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }

        let current = this.head;
        const nodes = [];

        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }

        console.log(nodes.join(" -> "));
    }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.display();  

list.remove();
list.display();  

list.remove();
list.display();  

list.remove();
list.display();  

list.remove();
list.display();  
