

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Create an instance of the Person class
const person = new Person('Abhijeet', 21);

// Log the greeting message
console.log(person.getGreeting());
