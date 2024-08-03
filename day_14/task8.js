class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person("Abhijeet", "Kokat");

console.log(`Full name : ${person.fullName}`);

person.fullName = "Abhijeet B Kokat";

console.log(`Updated full name : ${person.fullName}`);
