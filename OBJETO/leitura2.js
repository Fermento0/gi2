const dados = require("./cliente.json");

console.log(dados);

console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.timeLog(clienteEmString);

const objetoLiente = JSON.parse(clienteEmString)