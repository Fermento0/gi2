class Carro {
    constructor(modelo, cor, potencia) {
        this.modelo = modelo;
        this.cor = cor
        this.potencia = potencia
    }

    mostrarInformacoes() {
        console.log(`O carro é um ${this.modelo} e a cor dele é ${this.cor} a potência dele em cc é ${this.potencia}`);
    }

}

let meuCarro = new Carro("Fusca", "azul", 200)
let carrodofelipe = new Carro("Fiat 147", "Amarelo", 300)
meuCarro.mostrarInformacoes()