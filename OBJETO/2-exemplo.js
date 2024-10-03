let catalogo = {
    1: { id: 1, nome: 'Produto A', preco: 10.00},
    2: { id: 2, nome: 'Produto B', preco: 20.00}
};

let novoProduto = { id: 3, nome: 'Produto C', preco: 30.00};

catalogo[novoProduto.id] = novoProduto;
console.log(catalogo);