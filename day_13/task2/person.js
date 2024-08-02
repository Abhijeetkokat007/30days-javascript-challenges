
const person = {
    name: 'Abhijeet Kokat',
    age: 22,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    haveBirthday: function() {
        this.age += 1;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
};

module.exports = person;
