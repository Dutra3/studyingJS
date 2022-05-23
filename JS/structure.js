let newArray = [2, 4, 5, 9, 8, 7];

function simpleArraySum(ar) {

  let count = 0;

  for (elements in newArray) {

    count = count + newArray[elements];

  }

  return count;
}

console.log(simpleArraySum()); 

const total = newArray.reduce((acumlated, value) => acumlated + value);

console.log(total); // mesmo resultado que o for

console.log(newArray);

newArray.push(12); // poe no ultimo indicie o numero dentro dos parenteses

console.log(newArray);

newArray.unshift(23); // poe no primeiro indicie o numero dentro dos parenteses

console.log(newArray);

newArray.pop(); // removes the last element from an array and returns it.

console.log(newArray);

newArray.shift(); // removes the first element from an array and returns it.

console.log(newArray);

newArray.splice(2, 1); // removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(newArray);

const verify = newArray.includes(9); // se meu elemento é number tenho que colocar assim dentro do includes, se for string, devo usar ele '9' assim.

console.log(verify);

for (let value of newArray) {

 console.log(value); // imprime apenas os valores que o array tem, e ainda manda de forma separada, não em formato de array. Se fossem palavras, seriam palavras soltas.

}

newArray.forEach((value2, indicie, array) => {
  // callback, ele é um metodo arrow function
  console.log(value2);

  console.log(indicie);

  console.log(array);

  // Ele me devolve o primeiro valor, o indicie dele, e o array completo.
  // Depois o segundo valor, o seu indicie, e o array completo.
  // Faz esse procedimento nvezes, até o ultimo elemento.
});

const alteracao = 7;

const alteracaoFeita = newArray.map((valor) => valor * alteracao);

console.log(alteracaoFeita);

const mudanca = newArray.filter((valor) => valor > 7);

console.log(mudanca);

newArray.sort();

newArray, sort((a, b) => b - a);