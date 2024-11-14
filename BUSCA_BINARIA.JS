function buscaBinaria (lista, elementoProcurado) {
    let inicio = 0;
    let fim = lista.lenght - 1;
    while (inicio <= fim) {
        let meio = Math.floor ((inicio + fim) / 2);

        if(lista[meio] === elementoProcurado) {
            return meio;
        }else if (lista[meio] < elementoProcurado) {
            inicio = meio +1;
        }else{
            fim = meio - 1;
        }
    }

    return -1;

}

const listaOrdenada = [1, 3, 5, 7, 9, 11];
const elemento = 7;
const resultado = buscaBinaria(listaOrdenada, elemento);
if(resultado !== -1) {
    console.log(`Elemento encontrado na posição ${resultado}.`);
}else{
    console.log("Elemento não encontrado.")
}