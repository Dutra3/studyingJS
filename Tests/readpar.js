numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

function numerosPares (value) {
  if (value % 2 == 0) 
  return value;
}

function numerosImpares (value) {
  if (value % 2 != 0) 
  return value;
}

function numerosNegativos (value) {
  if (value < 0) 
  return value;
}

function numerosPositivos (value) {
  if (value > 0) 
  return value;
}

pares = numero.filter(numerosPares);
impares = numero.filter(numerosImpares);

positivos = numero.filter(numerosPositivos);
negativos = numero.filter(numerosNegativos);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");