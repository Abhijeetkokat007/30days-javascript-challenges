class Person {
    static genericGreeting() {
        return "Hello! This is a generic greeting from the Person class.";
    }
}


const greetingMessage = Person.genericGreeting();
console.log(greetingMessage);
