class Student {
    static numberOfStudents = 0;

    constructor(name) {
        this.name = name;
        Student.numberOfStudents++;
    }
    static getTotalStudents() {
        return Student.numberOfStudents;
    }
}

const student1 = new Student("Abhijeet");
const student2 = new Student("john");
const student3 = new Student("dieon");

console.log(`Total number of students: ${Student.getTotalStudents()}`);
