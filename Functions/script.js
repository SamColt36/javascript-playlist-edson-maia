document.getElementById("demo").style.backgroundColor = "#1f1f1f"
document.getElementById("demo").style.color = "#f1f1f1"


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
document.write(`<p> ${soma2(1, 2)}<br> </p>`)
document.write(`<p> ${soma2(23, 65)}<br> </p>`)

/* 
Função anônima = não tem nome
pode ou não ter parâmetros
pode ou não ter retorno
*/


// É usada geralmente quando se quer passar uma função como parâmetro de outra função
let titulo = document.querySelector('h1')
titulo.addEventListener('click', function () { console.log('Você clicou no título') })


// Arrow function ES 2015  em diante
// Arrow function é uma função anônima (que não possui nome, não possui 'return' e nem 'function')


/* 
Geralmente é declarada através de uma 'const' cujo nome seria o nome da function seguido por space e um sinal de '=>' e as chaves como um elemento opcional 
*/


const nomeDaFunction = () => {
	//procedimento
	document.write('Olá mundo usando Arrow Funcion')
}
nomeDaFunction()
