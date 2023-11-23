import { atualizarRelogioDigital, atualizarRelogioSmart, atualizarDadosMetereologicos } from './functions.js'

function atualizarRelogio() {
	setInterval(() => {
		atualizarRelogioDigital()
		atualizarRelogioSmart()
	}, 1000)
	atualizarDadosMetereologicos()
}

atualizarRelogio()