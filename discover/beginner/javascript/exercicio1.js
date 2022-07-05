var weight;
console.log(typeof weight);

let name = "Pedro";
let age = 30;
let stars = 4.5;
let isSubscribed = true;
let student = {}

console.log(typeof student)

student = {
    nameStudent: 'Maria',
    ageStudent: 29,
    weightStudent: 41.4,
    isSubscribedStudent: false 
}

console.log(student)

console.log(`${student.nameStudent} de iadede ${student.ageStudent} pesa ${student.weightStudent} kg.`);

let students = []

students = [
    student
]

console.log(students)
console.log(students[0])

const newStudent = {
    nameStudent: 'Ricardo',
    ageStudent: 22,
    weightStudent: 56.4,
    isSubscribedStudent: true 
}

//students = [
//    student,
//    newStudent
//]

students[1] = newStudent
console.log('STUDENTS:')
console.log(students)

console.log()
console.log(a) // undefined expected. Hoisting
var a = 1;