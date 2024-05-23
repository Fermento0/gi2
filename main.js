const gravidade = 9.81;
let tempo = prompt("informe o tempo em segundos");
let distancia = Math.floor(0.5*gravidade*tempo^2);
alert(distancia);