import {
	$nome,
	$idade,
	$peso,
	$altura,
	$btnEnviar,
	$btnLimpar,
	$aviso,
	$resultadoImc,
	$nomeResult,
	$idadeResult,
	$pesoResult,
	$alturaResult,
	$imcResult,
} from './dom.js'

import { tabelaIMC, calcularIMC } from './imc.js'

function popularTabela(name, age, weight, height) {
	$nomeResult.text(name)
	$idadeResult.text(`${age} anos`)
	$pesoResult.text(`${weight} kg`)
	$alturaResult.text(`${height} m`)
	$imcResult.text(`${tabelaIMC(weight, height)}`)
}

$btnEnviar.on('click', e => {
	const nome = $nome.val()
	const idade = $idade.val()
	const peso = $peso.val()
	const altura = $altura.val()
	const IMC = calcularIMC(peso, altura)

	popularTabela(nome, idade, peso, altura)
	$aviso.text(`${tabelaIMC(peso, altura)}`)
	$resultadoImc.val(IMC)

	e.preventDefault()
})

$btnLimpar.on('click', e => {
	limparForm()
	e.preventDefault()
})

function limparForm() {
	$('.pessoa').text('')
	$('.input').val('')
	$aviso.text('')
	$resultadoImc.val('0.0')
}

function alertPersonalizado() {
	return Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Valores negativos não são permitidos aqui!',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>',
	})
}

function validarForm(age, weight, height) {
	if (age < 0 || weight < 0 || height < 0) {
		alertPersonalizado()
		setTimeout(limparForm, 1500)
	}
}

$('#idade, #peso, #altura').on('change', e => {
	validarForm($idade.val(), $peso.val(), $altura.val())
	e.preventDefault()
})
