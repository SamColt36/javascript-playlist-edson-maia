// Variáveis criadas em forma de bloco
let primeiroNome = "Sam", // String com aspas duplas
	segundoNome = 'Colt', // String com aspas simples
	idade = 22, // Int
	peso = 52.74, // Real
	desocupado = false, // Boolean false
	trabalha = true, // Boolean true
	dinheiro = null, // Nulo
	estado = undefined // Variável não iniciada. 'estado = undefined' == 'estado'
// Escrevendo variáveis na tela  criando elementos HTML <p> e concatenando com +
document.write("<p> Primeiro nome: " + primeiroNome + "</p>")
document.write("<p> Segundo nome: " + segundoNome + "</p>")
document.write("<p> Idade: " + idade + "</p>")
document.write("<p> Peso: " + peso + "kg </p>")
document.write("<p> Ocupação: " + desocupado + "</p>")
document.write("<p> Ofício: " + trabalha + "</p>")
document.write("<p> Reserva: " + dinheiro + "</p>")
document.write("<p> Situação: " + estado + "</p>")
// Escrevendo variáveis na tela  criando elementos HTML e inserindo variáveis com o formato ${var}
document.write(`<p> Primeiro nome: ${primeiroNome} <p>`)
document.write(`<p> Segundo nome: ${segundoNome} </p>`)
document.write(`<p> Idade: ${idade} </p>`)
document.write(`<p> Peso: ${peso} </p>`)
document.write(`<p> Ocupação: ${desocupado} </p>`)
document.write(`<p> Ofício: ${trabalha} </p>`)
document.write(`<p> Reserva: ${dinheiro} </p>`)
document.write(`<p> Situação: ${estado} </p>`)