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

function tabelaIMC(weight, height) {
	const imc = calcularIMC(weight, height)

	if (imc < 17) return 'Muito abaixo do peso'
	else if (imc >= 17 && imc <= 18.49) return 'Abaixo do peso'
	else if (imc >= 18.5 && imc <= 24.99) return 'Peso normal'
	else if (imc >= 25 && imc <= 29.99) return 'Acima do peso'
	else if (imc >= 30 && imc <= 34.99) return 'Obesidade I'
	else if (imc >= 35 && imc <= 39.99) return 'Obesidade II (severa)'
	else if (imc >= 40) return 'Obesidade III(mórbida)'
}

function calcularIMC(weight, height) {
	return (weight / (Math.pow(height, 2))).toFixed(1)
}

function popularTabela(name, age, weight, height) {
	nomeResult.html(`${name}`)
	idadeResult.html(`${age} anos`)
	pesoResult.html(`${weight} kg`)
	alturaResult.html(`${height} m`)
	imcResult.html(`${tabelaIMC(weight, height)}`)
}

btnEnviar.click(e => {
	const $nome = nome.val()
	const $idade = idade.val()
	const $peso = peso.val()
	const $altura = altura.val()
	const IMC = calcularIMC($peso, $altura)

	popularTabela($nome, $idade, $peso, $altura)
	aviso.html(`${tabelaIMC($peso, $altura)}`)
	resultadoImc.val(IMC)

	e.preventDefault()
})


btnLimpar.click(e => {
	limparForm()
	e.preventDefault()
})

function limparForm() {
	$('p.pessoa').html('')
	$('.input').val('')
	aviso.html('')
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

function validarForm(age, weight, height) {
	if (age < 0 || weight < 0 || height < 0) {
		alertPersonalizado()
		setTimeout(limparForm, 1500)
	}
}

$('#idade, #peso, #altura').change(e => {
	validarForm(idade.val(), peso.val(), altura.val())
	e.preventDefault()
})