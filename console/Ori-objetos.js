class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor
    }

    mostrarInformacoes() {
        console.log(`O carro é um ${this.modelo} e a cor dele é ${this.cor}`);
    }

}

let meuCarro = new Carro("Fusca", "azul", 200)
let carrodofelipe = new Carro("Fiat 147", "Amarelo", 300)
meuCarro.mostrarInformacoes()