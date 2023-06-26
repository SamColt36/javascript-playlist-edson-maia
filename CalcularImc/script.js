/* SELECIONE TODOS OS ELEMENTOS QUE
DESEJA MANIPULAR */
let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

/* PARA PEGAR OS DADOS QUE ESTAO DENTRO DAS
CAIXAS USE A PROPRIEDADE .value
MAS, ANTES DETERMINE UM EVENTO COMO REFERENCIA PARA PEGAR OS DADOS */

/* Adicionei escutador para o btnEnviar */
// Uma funcao anonima para pegar os valores
// calcular o imc
btnEnviar.addEventListener('click', function (e) {
	// pegar os values de cada input
	let nome = cxNome.value
	let idade = parseInt(cxIdade.value)
	let peso = parseFloat(cxPeso.value)
	let altura = parseFloat(cxAltura.value)
	let imc = (peso / (altura * altura)).toFixed(1)
	let sit = situacaoDoPeso(imc)

	// criar objeto pessoa
	let pessoa = {
		nome: nome,
		idade: idade,
		peso: peso,
		altura: altura,
		imc: imc,
		sit: sit,
	}

	dados[1].textContent = pessoa.nome
	if (isNaN(pessoa.peso) || isNaN(pessoa.altura)) {
		cxImc.value = imc
		aviso.textContent = 'Informe seu peso corretamente'
	} else {
		// Rotina que verifica se o campo idade tem conteúdo
		// Se não tiver conteúdo ele não imprimi nada da saída
		if (isNaN(pessoa.idade)) dados[2].textContent = ''
		// Se tiver conteúdo imprimi o resultado mais uma String
		else dados[2].textContent = pessoa.idade + " anos"
		
		aviso.textContent = sit
		dados[3].textContent = pessoa.peso + " kg"
		dados[4].textContent = pessoa.altura + " m"
		dados[5].textContent = pessoa.imc + " " + pessoa.sit
	}

	// previnir o comportamento padrao
	e.preventDefault()
})

function situacaoDoPeso(imc) {
	let situacao = ''
	if (imc < 18.5) {
		situacao = 'Baixo peso'
	} else if (imc >= 18.5 && imc <= 24.9) {
		situacao = 'Peso normal'
	} else if (imc >= 25 && imc <= 29.9) {
		situacao = 'Sobrepeso'
	} else if (imc >= 30 && imc <= 34.9) {
		situacao = 'Obesidade I'
	} else if (imc >= 35 && imc <= 39.9) {
		situacao = 'Obesidade II'
	} else if (imc >= 40) {
		situacao = 'Obesidade III'
	} else {
		situacao = ''
	}
	return situacao
}

function reset() {
	aviso.textContent = ''
}

function validar(num) {
	if (num.value < 0) {
		aviso.textContent = 'Entrada inválida!'

		setTimeout(function () {
			num.value = ''
			reset()
		}, 2000)
	}
}
// Como o button reset do HTML já reseta os campos de entrada, não é necessários adicionar js para isso
// Porém, para resetar a tabela com as informações do usuário foi necessário adicionar a lógica abaixo
btnLimpar.addEventListener('click', function () {
	reset()
	for (let i = 0; i < dados.length; i++) {
		dados[i].textContent = ''
	}
})