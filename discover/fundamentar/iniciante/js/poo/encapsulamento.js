class Poligono {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    get area() {
        return this.#calcularArea();
    }

    // protected 
    #calcularArea() {
        return this.altura * this.largura;
    }
}

let poligono = new Poligono(50, 20);
console.log(poligono);
// console.log(poligono.#calcularArea()); - not acessible
console.log(poligono.area);