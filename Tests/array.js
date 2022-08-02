value = 89;
const cedulas = [100, 50, 20, 10, 5, 2, 1];
const numCedulas = [0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < cedulas.length; i++) {
	if (value >= cedulas[i]) {
		qtdnotas = Math.floor(value / cedulas[i]);
		total = qtdnotas * cedulas[i];
		value = value - total;
		numCedulas[i] = qtdnotas;
	}
}

numCedulas.map((cedula, index) => {
	console.log(`${cedula} nota(s) de R$ ${cedulas[index]}`);
});