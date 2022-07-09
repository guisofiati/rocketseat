class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    
    mover(direcao){};
    virar(direcao){};
}

class Moto extends Veiculo {
    constructor() {
        super();
        this.rodas = 2;
    }
}

let moto = new Moto();
console.log(moto);