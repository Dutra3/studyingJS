let valorTotal = 89;

const cedulas = [100, 50, 20, 10, 5, 2, 1];

for (let i = 0; i < cedulas.length; i++) {
	let qtdnotas = 0;
	if (valorTotal >= cedulas[i]) {
		qtdnotas = Math.floor(valorTotal / cedulas[i]);
		total = qtdnotas * cedulas[i];
		valorTotal = valorTotal - total;
	}

	console.log(`${qtdnotas} nota(s) de R$ ${cedulas[i]}`);
}