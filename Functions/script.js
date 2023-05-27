/*
function name(parameter1, parameter2, parameter3) {
	 code to be executed
}
*/
// function sem return são chamados procedimentos
function olaMundo1() {
	document.write(`Olá Mundo SEM a palavra reservada 'return' <br>`)
}
function soma1(number1, number2) {
	document.write(`a = ${number1} e b = ${number2} logo a + b = ${number1 + number2}`)
}
// function com return são de fato funções
function olaMundo2() {
	return "Olá mundo COM a palavra reservada 'return'"
}
function soma2(a, b) {
	return "a = " + a + " e b = " + b + " logo a + b = " + (a + b)
}
// Chamando as funcions
olaMundo1() // procedimentos
document.write(olaMundo2()) // funções
document.write(`<hr>`)
document.write(`<p> ${soma1(1, 2)}<br> </p>`)
document.write(`<p> ${soma2(23, 65)}<br> </p>`)
document.write()