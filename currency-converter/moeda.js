import { cotacaoEntreMoedas } from './api.js'

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

export { converterMoeda, simboloMonetario }