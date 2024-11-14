const { edGalho, edfolha } = require('./bora');
function juntaListas(listas1,Lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = listas1[ posicaoAtualLista1];
    let posicaoAtualLista2 = Lista2[posicaoAtualLista2];
   
   
   
   
   
   
    if (ProdutoAtualLista1.preco < ProdutoAtualLista2.preco){
        listaFinal[atual] = ProdutoAtualLista1;
        posicaoAtualLista1++;
    } else{ 
        listaFinal[atual] = ProdutoAtualLista2;
        posicaoAtualLista2++;
    }
     atual++;
}
while ( posicaoAtualLista1 < Lista1.length){
    listaFinal[atual] = Lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    ataul++;
}
while(posicaoAtualLista2 < Lista2.length){
    listaFinal[atual] = Lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
}
return listaFinal
}
console.log(juntaListas(edgalho,edfolha))