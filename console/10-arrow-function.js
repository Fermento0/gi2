function apresentacao(nome){
    return `meu nome é ${nome} `
}

const apresentarArrow = nome => `meu nome é ${Evan}`

const soma= function(valor1, valor2){
    return valor1 + valor2
}

const soma2 = (valor3, valor4) => valor3 + valor4

const somaNumeroPequenos = (numero1, numero2) => {
    if (numero1 > 10 || numero2 > 10){
        return("Somente números de 1 a 10");
    }else{
        return numero1 + numero2;
    }
}

console.log()