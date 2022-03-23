function parimpar(n) {

    if (n%2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

console.log(parimpar(15))


// Outro modo de fazer a função, mas que me deixa limitado.
function parimpar2() {

    let n = 8

    if (n%2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

console.log(parimpar2()) // Mesmo que eu coloque um valor dentro de parimpar(), o valor selicionado é o 8, pois passei nenhum parametro quando criei a função.