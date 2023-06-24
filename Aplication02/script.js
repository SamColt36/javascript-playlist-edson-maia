// PRIMEIRO SE FAZ A SELEÇÃO DOS ELEMENTOS
let form = document.querySelector('#form')

let nota1 = document.querySelector('#nota1'),
	nota2 = document.querySelector('#nota2'),
	btnCalcular = document.querySelector('#btnCalcular'),
	btnLimpar = document.querySelector('#btnLimpar'),
	media = document.querySelector('#media'),
	situacao = document.querySelector('#situacao'),
	aviso = document.querySelector('#aviso')

btnCalcular.addEventListener('click', function (e) {
	// pegar os values de cada input
	// O método .parseFloat() converte um valor em uma representação de float
	// .parseFloat() analisa uma string e retorna um número de ponto flutuante correspondente.
	let n1 = parseFloat(nota1.value),
		n2 = parseFloat(nota2.value),
		m = ((n1 + n2) / 2)
	media.value = m
	let sit = situacaoNota(m)
	situacao.value = sit
	e.preventDefault()
})

function situacaoNota(m) {
	let aux = ''
	if (m < 6) aux = 'Reprovado'
	else if (m >= 6 && m < 7) aux = 'Recuperação'
	else aux = 'Aprovado'

	return aux
}

function validar() {
	let aux = ''
	if (parseFloat(nota1.value) < 0 || parseFloat(nota2.value) < 0) {
		aux = 'Error Input'
	}
	aviso.value = aux
	return aux
}