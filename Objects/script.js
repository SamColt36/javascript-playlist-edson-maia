document.getElementById('demo').style.backgroundColor = '#1F1F1F'
document.getElementById('demo').style.color = '#ccc'

let eu = {
	nome: "Sam",
	sobrenome: "Colt",
	idade: 22,
	peso: 51,
	altura: 1.76,
	// Também é possível adicionar função dentro do elemento do objeto
	// Nesse caso é uma função anônima
	nomeCompleto: function () { return this.nome + " " + this.sobrenome }
}
function imc() {
	let result = (eu.peso / (Math.pow(eu.altura, 2)))
	return result
}
document.write(`<h1> Nome completo: ${eu.nomeCompleto()} </h1>`)

// tofixed()
// O método .toFixed(number) limita o número de casas decimais 
document.write(`<h1> Imc: ${imc().toFixed(2)} </h1>`)

// Alterar propriedade do objeto
eu.nome = "Sam Colt 1836"
document.write(`<h1> Nome atualizado: ${eu.nome} </h1>`)

// Int.NumberFormat = Formata String sensíveis a localidade
// new Intl.NumberFormat([locales[, options]])

// Formatando moeda
// Cria-se um objeto com as propriedades
// style permite 'decimal' (números), 'currency' (moeda) e 'percent' (percentual)
let precoGasolina = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 }),
	price = 3.65648941616464186
//document.write(precoGasolina.format(price))
// 
let resultadoImc = new Intl.NumberFormat('pt-BR', {style: 'decimal', maximumFractionDigits: 3})
document.write(`<h2> IMC com três casas decimais padrão pt-BR ${resultadoImc.format(imc())}</h2>`)
