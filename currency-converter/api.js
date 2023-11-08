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
export { cotacaoEntreMoedas }