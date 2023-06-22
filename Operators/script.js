// É possivel usar vários operadores com Strings: > < += + (continua)
// Operadores lógicos && and, || or e ! not
// Também em JS há operadores bitwise

// Adendo
document.getElementById('demo').style.backgroundColor = '#1F1F1F'
document.getElementById('demo').style.color = '#ccc'

let a = 50,
	b = 2,
	c = "2"
	d = "lorem ipsem"

// Utilizando 'template string'
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
document.write("-------- <br>")


// Não é identico a
document.write(`a > d = ${a > d} <br>`)
document.write(`a < d = ${a < d} <br>`)
document.write(`c == d = ${c == d} <br>`)
document.write(`c === d = ${c === d} <br>`)
document.write(`c >= d = ${c >= d} <br>`)
document.write(`c <= d = ${c <= d} <br>`)
document.write("-------- <br>")


// 00000001 = 1
// 00000010 = 2
// 00000011 = 3	==> 1 | 2
document.write(`1 | 2 <br> ${1 | 2}`)
/* 
O operador de bitwise | (Or) verifica da esquerda para a direita, se encontrar ao menos um número 1 ele retorna 1 com valor.
Dessa forma, 1 | 2 = 3, que em binary é 0000011 = 3
*/


// 00000001 = 1
// 00000010 = 2
// 00000000 = 0
document.write(`1 & 2 <br> ${1 & 2}`)
/* 
O operador de bitwise & (And) verifica da esquerda para a direita, se encontrar na mesma posição os dois, ou mais, números 1 ele retorna 1 com valor.
Dessa forma, 1 & 2 = 0, que em binary é 0000000 = 0
*/



