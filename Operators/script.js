// É possivel usar vários operadores com Strings: > < += + (continua)
// Operadores lógicos && and, || or e ! not
// Também em JS há operadores bitwise

// Adendo
document.getElementById("demo").style.backgroundColor = "gray"
document.getElementById("demo").style.color = "white"

let a = 50,
	b = 2,
	c = "2"
	d = "lorem ipsem"
document.write(`a = ${a} <br>`)
document.write(`b = ${b} <br>`)
document.write(`c = ${c} <br>`)
document.write(`d = ${d} <br>`)
document.write("-------- <br>")
document.write(`a + b = ${a + b} <br>`)
document.write(`a - b = ${a - b} <br>`)
document.write(`a * b = ${a * b} <br>`)
document.write(`a / b = ${a / b} <br>`)
document.write(`a % b = ${a % b} <br>`)
document.write("-------- <br>")
// compara de o conteúdo é igual
// Igual a 
document.write(`b == c -> ${b == c} <br>`) 
// compara se o conteúdo e o tipo da variável são iguais. Chamada comparação 'identidade'
// Identico a
document.write(`b === c -> ${b === c} <br>`) 
document.write(`b != c -> ${b != c} <br>`)
// Não é igual a 
document.write(`b !== c -> ${b !== c} <br>`)
// Não é identico a
document.write("-------- <br>")
document.write(`a > d = ${a > d} <br>`)
document.write(`a < d = ${a < d} <br>`)
document.write(`a >= d = ${a >= d} <br>`)

