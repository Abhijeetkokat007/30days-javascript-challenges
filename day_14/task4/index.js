

const Person = require('./person');

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    // Overriding the getGreeting method
    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

// Create an instance of the Student class
const student = new Student('Alice', 30, 'S12345');

// Log the overridden greeting message
console.log(student.getGreeting());
