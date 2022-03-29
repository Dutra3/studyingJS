const array = [80, 80, 88]
let tot = 0

function media(dados) {
    for (var notas in array) {
        tot += array[notas]
        var nota = tot / (array.length)
    }
    if (nota <= 59) {
        return "F"
    } else if (nota <= 69) {
        return "D"
    } else if (nota <= 79) {
        return "C"
    } else if (nota <= 89) {
        return "B"
    } else {
        return "A"
    }
    console.log(resultado)
}

media(array)
