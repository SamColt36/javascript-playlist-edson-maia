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
document.write(`<h1> Nome completo: ${eu.nomeCompleto()} </h1>`)

// tofixed()
// O método .toFixed(number) limita o número de casas decimais 
document.write(`<h1> Imc: ${imc().toFixed(2)} </h1>`)

// Alterar propriedade do objeto
eu.nome = "Sam Colt 1836"
document.write(`<h1> Nome atualizado: ${eu.nome} </h1>`)
