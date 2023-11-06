const valorEmReal = document.getElementById('valorEmReal')
const moedaSelecionada = document.querySelectorAll('input[name="moedaEstrangeira"]')
const aviso = document.getElementById('aviso')
const btnConverter = document.getElementById('btnConverter')
const btnLimpar = document.getElementById('btnLimpar')

async function cotacaoEntreMoedas() {
	try {
		const cotacoes = []
		const request = await fetch(`https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,BTC-BRL`)
		const response = await request.json()
		// Está na ordem: USD, EUR, GBP, BTC
		const moedas = Object.keys(response)
		moedas.forEach(e => cotacoes.push(response[e].ask))

		return cotacoes.map(Number)
	} catch (error) {
		console.error('Ocorreu um erro:', error.message)
		throw error
	}
}
// A API não fornece a conversão direta de real para bitcoin, logo deve ser feito um tratamento para retornar o valor referente a 1 real em bitcoins e não o contrário

moedaSelecionada.forEach(input => input.addEventListener("input", (e) => {
	ativarBotao()
	e.preventDefault()
}))

valorEmReal.addEventListener("input", (e) => {
	ativarBotao()
	e.preventDefault()
})

$(btnConverter).click((e) => {
	Array.from(moedaSelecionada).some(e => {
		if (e.checked) converterMoeda(e.value, valorEmReal.value)
			.then(response => {
				const real = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valorEmReal.value)
				$(aviso).html(`O valor ${real} convertido em ${e.value} é ${simboloMonetario(e.value)} ${response.toFixed(2)}`)
			})
	})
	e.preventDefault()
})

$(btnLimpar).click((e) => {
	desativarBotao()
	$(valorEmReal).prop('value', null)
	$('input[name="moedaEstrangeira"]').prop('checked', false)
	$(aviso).html('Digite o valor, escolha a moeda e converter')
	console.clear()
	e.preventDefault()
})

function desativarBotao() {
	$(btnConverter).removeClass('ativado')
	$(btnConverter).prop('disabled', true)
}

function ativarBotao() {
	if (validarInputRadio() === true && valorEmReal.value !== '') {
		$(btnConverter).addClass('ativado')
		$(btnConverter).prop('disabled', false)
	} else desativarBotao()
}


function validarInputRadio() {
	return Array.from(moedaSelecionada).some(e => e.checked)
}

function converterMoeda(moedaEstrangeira, moedaBrasileira) {
	const real = parseFloat(moedaBrasileira)
	switch (moedaEstrangeira) {
		case 'USD':
			return cotacaoEntreMoedas()
				.then(data => {
					return (parseFloat(data[0]) * real)
				})
		case 'EUR':
			return cotacaoEntreMoedas()
				.then(data => {
					return (parseFloat(data[1]) * real)
				})
		case 'GBP':
			return cotacaoEntreMoedas()
				.then(data => {
					return (parseFloat(data[2]) * real)
				})
		case 'BTC':
			return cotacaoEntreMoedas()
				.then(data => {
					return (parseFloat(1 / data[3]) * real)
				})
	}
}

function simboloMonetario(moedaEstrangeira) {
	switch (moedaEstrangeira) {
		case 'USD': return '$'
		case 'EUR': return '€'
		case 'GBP': return '£'
		case 'BTC': return ''
	}
}