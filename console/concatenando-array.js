const nomes =["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
const funcionarios = [nomes, idades, faculdade];
if (funcionarios[2][0] === false){
    console.log(`A funcionária ${funcionarios[0][0]}, possui ${funcionarios[1][0]} anos e não possui faculdade `)
}