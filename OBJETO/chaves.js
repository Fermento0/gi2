const cliente = {
    nome: "Joao",
    idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "114444440"],
};
cliente.enderecos = [
    {
        rua: "R. joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
}