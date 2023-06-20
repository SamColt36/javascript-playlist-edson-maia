let eu = {
	nome: "Sam",
	sobrenome: "Colt",
	idade: 22,
	peso: 51,
	altura: 1.76,
	// também é possível adicionar função dentro do elemento do objeto
	nomeCompleto: function () { return this.nome + " " + this.sobrenome }
}
function imc () {
	let result =  (eu.peso / (Math.pow(eu.altura, 2)))
	return result
}
document.write(`<h1> Nome completo ${eu.nomeCompleto()} </h1>`)
document.write(`<h1> Nome completo ${imc().toFixed(2)} </h1>`)