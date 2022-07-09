class Animal {
    constructor() {
        if (this.constructor === Animal) {
            throw new Error("Can't instantiate Animal because it's abstract");
        }
    }

    get sound() {
        throw new Error('method must be implemented');
    }
}

class Cat extends Animal {
    constructor() { super() }

    get sound() {
        return 'miau';
    }
}

class Dog extends Animal {
    constructor() { super() }

    get sound() {
        return 'au au';
    }
}

// let animal = new Animal();
let cat = new Cat();
let dog = new Dog();

console.log('Dog sound:', dog.sound);
console.log('Cat sound:', cat.sound);