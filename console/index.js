const listaLivros = require ("./array.js");
function mergeSort(array) {
    if (array.lenght > 1) {
        const meio = Math.floor(arraay.lenght / 2);
        const part1 = mergeSort(array.slice(0, meio));
        const part2 = mergeSort(array.slice(meio));
        array = ordena (part1, part2);
    }

    return array;

}
function ordena(part1, part2) {
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;
    const resultado = [];
    while(
        posicaoAtualPart1 < part1.lenght &&
        posicaoAtualPart2 < part2.lenght
    ) {
        const ProdutoAtualLista1 = part1 [posicaoAtualPart1];
        const ProdutoAtualLista2 = part2 [posicaoAtualPart2];

        if (produtoAtualPart1.preco < produtoAtualPart2.preco) {
            resultado.push(produtoAtualPart1)
            posicaoAtualPart1++;
        }else{
            resultado.push(posicaoAtualPart2);
            posicaoAtualPart2++
        }
    }

    return resultado.concat(
        posicaoAtualPart1 < part1.lenght
        ? part1.slice(posicaoAtualPart1)
        : part2.slice(posicaoAtualPart2)
    );

}