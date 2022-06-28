const person = {
    name: 'John',
    age: 21,
    weight: 88.6
}

for (let field in person) {
    console.log(field);
    console.log(person[field]);
}
