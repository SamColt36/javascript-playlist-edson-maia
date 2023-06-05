// PRImediaEIRO SE FAZ A SELEÇÃO DOS ELEMENTOS
let nota1 = document.querySelector('#nota1'),
	nota2 = document.querySelector('#nota2'),
	calc = document.querySelector('#btnCalcular'),
	reset = document.querySelector('#btnLimpar'),
	media = document.querySelector('#media'),
	situacao = document.querySelector('#situacao'),
	aviso = document.querySelector('#aviso')

calc.addEventListener('click', function (e) {
	let n1 = nota1.value,
		n2 = nota2.value,
		med = ((n1 + n2) / 2)
		media.value = med,
		temp = sit(med)
	situacao.textContent = temp

	e.preventDefault()
})

function sit(med) {
	let s = ""

	if (med < 6) {
		s = "Reprovado"
	}
	else if (6 <= med < 7) {
		s = "AF"
	}
	else {
		s = "Aprovado"
	}
	return s
}

