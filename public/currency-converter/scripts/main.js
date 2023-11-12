import { valorEmReal, moedaSelecionada, aviso, btnConverter, btnLimpar } from './dom.js'
import { ativarBotao, desativarBotao } from './form.js'
import { converterMoeda, simboloMonetario } from "./moeda.js";

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
	valorEmReal.focus()
	$(valorEmReal).prop('value', null)
	$('input[name="moedaEstrangeira"]').prop('checked', false)
	$(aviso).html('Digite o valor, escolha a moeda e converter')
	console.clear()
	e.preventDefault()
})