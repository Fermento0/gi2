const alunos = ["Joana, BERNARDO, lucas, mARIA"]
const nomeMaiusculas = alunos.map((maiusculas) => {
    return maiusculas.toUpperCase()
})

console.log(nomeMaiusculas)

const alunos2 = ["Joana, BERNARDO, lucas, mARIA"]
const nomeMinusculas = alunos2.map((minusculas) => {
    return minusculas.toLowerCase()
})

console.log(nomeMinusculas)