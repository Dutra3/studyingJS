function somar(limite) {
    let i = 0
    var soma = 0;
    while (i <= limite) {
        if (i%3 == 0 || i%5 == 0) {
            soma += i;
        }
        i++
    }
    console.log(soma)
}

somar(35)