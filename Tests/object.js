let valorTotal = 89;

const cedulas = [
	{
		valor: 100,
		quantidade: 0,
	},
	{
		valor: 50,
		quantidade: 0,
	},
	{
		valor: 20,
		quantidade: 0,
	},
	{
		valor: 10,
		quantidade: 0,
	},
	{
		valor: 5,
		quantidade: 0,
	},
	{
		valor: 2,
		quantidade: 0,
	},
	{
		valor: 1,
		quantidade: 0,
	},
];

for (let i = 0; i < cedulas.length; i++) {
	if (valorTotal >= cedulas[i].valor) {
		qtdnotas = Math.floor(valorTotal / cedulas[i].valor);
		total = qtdnotas * cedulas[i].valor;
		valorTotal = valorTotal - total;
		cedulas[i].quantidade = qtdnotas;
	}

	console.log(`${cedulas[i].quantidade} nota(s) de R$ ${cedulas[i].valor}`);
}