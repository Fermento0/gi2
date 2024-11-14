const {edGalho, edFolha} = require ('./arrays');

function juntaListas(Lista1, Lista2) {
    let listaFinal = []

    let posicaoAtualLista1 = 0;

    let posicaoAtualLista2 = 0;

    let atual = 0;

    while (posicaoAtualLista1 < Lista1.lenght && posicaoAtualLista2 < Lista2.lenght) {
        
        let produtoAtualLista1 = Lista1[ posicaoAtualLista1];

        let produtoAtualLista2 = Lista2[posicaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco){

            ListaFinal[atual] = produtoAtualLista1;

            posicaoAtualLista1++;

        }else{

            listaFinal[atual] = posicaoAtualLista2

            posicaoAtualLista2++;

        }

        atual++;

    }

    while (posicaoAtualLista1 < Lista1.lenght){
        listaFinal [atual] = Lista1 [posicaoAtualLista1];
    }

} 