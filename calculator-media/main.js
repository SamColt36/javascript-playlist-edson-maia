const inputNota1 = $('#nota1')
const inputNota2 = $('#nota2')

const btnCalcular = $('#btnCalcular')
const btnLimpar = $('#btnLimpar')

const inputMedia = $('#media')
const situacao = $('#situacao')
const aviso = $('#aviso')

function calcularMedia(firstNumber, secondNumber) {
	return (Number(firstNumber) + Number(secondNumber)) / 2
}

function clearForm() {
	$('input').val('')
	situacao.attr('class', 'default')
}

function alertPersonalizado() {
	return Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Valores negativos não são permitidos aqui!',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>'
	})
}

function validarInputValues(firstNumber, secondNumber) {
	if (firstNumber < 0 || secondNumber < 0) {
		alertPersonalizado()
		setTimeout(clearForm, 1500)
	}
}

$(inputNota1, inputNota2).change(e => {
	validarInputValues(inputNota1.val(), inputNota2.val())
	e.preventDefault()
})

function situacaoALuno(media) {
	if (media <= 5) {
		situacao.attr('class', 'reprovado')
		return 'Reprovado'
	}
	else if (media > 5 && media < 7) {
		situacao.attr('class', 'recuperacao')

		return 'Recuperação'
	}
	else if (media >= 7) {
		situacao.attr('class', 'aprovado')
		return 'Aprovado'
	}
}

btnCalcular.click(e => {
	const MEDIA = calcularMedia(inputNota1.val(), inputNota2.val())
	inputMedia.val(MEDIA)
	situacao.val(situacaoALuno(MEDIA))
	e.preventDefault()
})

btnLimpar.click(e => {
	clearForm()
	e.preventDefault()
})