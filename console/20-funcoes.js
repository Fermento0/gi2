function calcularMedia(avaliacoes){
    for (let i = 0; i < avaliacoes.lenght; i++){
        soma += avaliacoes[i];
    }
    return soma / avaliacoes.lenght;

}

let avaliacoes = [7.8, 9.2, 6.5, 8.1, 7.3];

let mediaArredondada = Math.round(calcularMedia(avaliacoes));
console.log("Média arredondada:", mediaArredondada);

let mediaArredondadaParaCima = Math.ceil(calcularMedia(avaliacoes));
console.log("Média arredondada para cima:", mediaArredondadaParaCima);