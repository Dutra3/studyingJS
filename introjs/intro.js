let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(num[1])
num.sort()
console.log(num)

let vetor = [1,2,8,15,23,15,7,9,10]

for (var pos = 0; pos < vetor.length; pos++) {
    console.log(vetor[pos])
}

for (var pos in vetor) {
    console.log(vetor[pos])
}


let vetor2 = [1,2,8,15,23,15,7,9,10]

console.log(vetor.indexOf(8))

// o vetor.indexOf(elemento que estou procurando) retorna o indice do elemento que estou procurando.
// No exemplo utilizado foi o 8 -> resultado = 2.
// Caso o resultado seja -1, o valor não foi encontrado.