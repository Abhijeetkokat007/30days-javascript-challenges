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

        console.log("Printer Queue: " + this.items.join(" -> "));
    }
}

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(jobName) {
        console.log(`Adding job: ${jobName}`);
        this.queue.enqueue(jobName);
        this.queue.display();
    }

    processJob() {
        if (this.queue.isEmpty()) {
            console.log("No jobs to process.");
            return;
        }

        const job = this.queue.dequeue();
        console.log(`Processing job: ${job}`);
        this.queue.display();
    }

    viewNextJob() {
        const nextJob = this.queue.front();
        if (nextJob) {
            console.log(`Next job to be processed: ${nextJob}`);
        }
    }
}

const printerQueue = new PrinterQueue();

printerQueue.addJob("Document1.pdf");
printerQueue.addJob("Photo.jpg");
printerQueue.addJob("Presentation.pptx");

printerQueue.viewNextJob();  
printerQueue.processJob();  
                            
printerQueue.processJob();  
                            

printerQueue.processJob();  
                            

printerQueue.processJob();  