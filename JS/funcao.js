let arrayAprovados = []

function verificaAprovacao(array, media) {
  for (let i = 0; i < array.length; i++) {
    if(array[i][1] >= media) {
      arrayAprovados.push(array[i][0])
    }
  }

  return arrayAprovados
}

let alunos = [['Aluno1', 8], ['Aluno2', 6], ['Aluno3', 5], ['Aluno4', 7], ['Aluno5', 2], ['Aluno6', 6], ['Aluno7', 9], ['Aluno8', 10] ]
console.log(alunos[0][1])
verificaAprovacao(alunos, 6)
console.log(arrayAprovados)