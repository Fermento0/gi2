const tempoObjetivo1 = new Date ("2024-10-05T00:00:00");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

console.log(calculaTempo(tempoObjetivo1))

//a