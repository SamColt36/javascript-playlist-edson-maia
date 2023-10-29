const nome = $('#nome')
const idade = $('#idade')
const peso = $('#peso')
const altura = $('#altura')

const btnEnviar = $('#btnEnviar')
const btnLimpar = $('#btnLimpar')

const resultadoImc = $('#resultadoImc')
const aviso = $('#aviso')

const nomeResult = $('p#nome.pessoa')
const idadeResult = $('p#idade.pessoa')
const pesoResult = $('p#peso.pessoa')
const alturaResult = $('p#altura.pessoa')
const imcResult = $('p#imc.pessoa')

function tabelaImc() {
	const imc = calcularImc(peso, altura)
	if (imc < 17) return 'Muito abaixo do peso'
	else if (imc >= 17 && imc <= 18.49) return 'Abaixo do peso'
	else if (imc >= 18.5 && imc <= 24.99) return 'Peso normal'
	else if (imc >= 25 && imc <= 29.99) return 'Acima do peso'
	else if (imc >= 30 && imc <= 34.99) return 'Obesidade I'
	else if (imc >= 35 && imc <= 39.99) return 'Obesidade II (severa)'
	else if (imc >= 40) return 'Obesidade III(mórbida)'
}

function calcularImc(peso, altura) {
	return peso.val() / (Math.pow(altura.val(), 2))
}

function popularTabela() {
	nomeResult.html(`${nome.val()}`)
	idadeResult.html(`${idade.val()} anos`)
	pesoResult.html(`${(peso.val()).toFixed(2)} kg`)
	alturaResult.html(`${(altura.val()).toFixed(2)} m`)
	imcResult.html(`${tabelaImc()}`)
}

btnEnviar.click(e => {
	popularTabela()
	aviso.html(`${tabelaImc()}`)
	resultadoImc.val(calcularImc(peso, altura).toFixed(2))
	e.preventDefault()
})

btnLimpar.click(e => {
	limparForm()
	e.preventDefault()
})

function limparForm() {
	$('p.pessoa').html('')
	$('.input').val('')
	resultadoImc.val('0.0')
}

function alertPersonalizado() {
	return Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Valores negativos não são permitidos aqui!',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>'
	})
}

function validarForm() {
	if (idade.val() < 0 || peso.val() < 0 || altura.val() < 0) {
		alertPersonalizado()
	}
}

$('#idade, #peso, #altura').change(e => {
	validarForm()
	setTimeout(limparForm, 1500)
	e.preventDefault()
})