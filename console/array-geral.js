let retirar_primeiro = [2,3,4,5,6,7,8,9,10,11,12]
retirar_primeiro.shift()
console.group(retirar_primeiro)
retirar_primeiro[0] = 100
console.log(retirar_primeiro)

let frutas = ['maçã', 'banana', 'pera', 'abacaxi', 'mamão', 'caqui', 'ovo']
console.log(frutas)
frutas.unshift('leite')
console.log(frutas)

frutas[0] = 'telha'
console.log(frutas)