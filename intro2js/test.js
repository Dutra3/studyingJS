var teste = "Exemplo"

function test() {
    console.log(`O valor encontrado aqui é ${teste}`);

    if (true) {
        var teste = "Exemplo2"
        console.log(`O valor encontrado dentro do if ${teste}`);
    }

    console.log(`O valor encontrado depois do if ${teste}`);

}

test()

// Aqui o LET e o CONST são diferentesd do VAR, eles respeitam o escopo de bloco.
// Ou seja, eles ficam "PREESOS" dentro do bloco, só são utilizados ali.
function test2() {
    console.log(`O valor encontrado aqui é ${teste}`);

    if (true) {
        let teste = "Dentro do IF TESTE 2"
        console.log(`O valor encontrado dentro do if ${teste}`);
    }

    console.log(`O valor encontrado depois do if no teste 2 ${teste}`);

}

test2()

// CONST
function test3() {
    console.log(`O valor encontrado aqui é ${teste}`);

    if (true) {
        const teste = "Dentro do IF TESTE 3"
        console.log(`O valor encontrado dentro do if ${teste}`);
    }

    console.log(`O valor encontrado depois do if no teste 3 ${teste}`);

}

test3()


// teste de string no JS
const mensagem = "ola mundo"
console.log(mensagem.endsWith('mundo'))

