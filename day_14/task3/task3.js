// student.js

// Importing the Person class
const Person = require('./person');

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        this.name = name;
        this.age = age;
    }

    getStudentId() {
        return `
        Student Name: ${this.name}
        Student Age: ${this.age}
        Student ID: ${this.studentId}
        `;
    }
}

// Create an instance of the Student class
const student = new Student('Abhijeet', 21, 'B12345');

// Log the student ID
console.log(student.getStudentId());
