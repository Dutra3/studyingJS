function calculaIdade(anos) {
  return `Daqui a ${anos} anos. ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa = {
  nome: 'Gabriel',
  idade: 34
}

const pessoa2 = {
  nome: 'Gabriela',
  idade: 20
}

console.log(calculaIdade.call(pessoa, 4)) // Preciso lembrar que para chamar tenhoque fazer isso, tava dendo errado qp esqueci do CALL, BIND e APPLY
console.log(calculaIdade.apply(pessoa2, [4])) // Lembrar que para esse caso eu tenho que colocar o colchetes.
