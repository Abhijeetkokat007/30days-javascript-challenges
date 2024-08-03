
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person = new Person('Abhijeet', 21);

console.log(person.getGreeting());

person.updateAge(22);
