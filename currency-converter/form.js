import { valorEmReal, moedaSelecionada, btnConverter } from './dom.js'

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

export { desativarBotao, ativarBotao, validarInputRadio }