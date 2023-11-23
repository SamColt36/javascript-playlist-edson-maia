import { relogioDigital, hSmart, mSmart, sSmart, semana, data, tempMax, tempMin, umidad } from './dom.js'
import { dadosMeteorologicos } from './api.js'

function atualizarRelogioDigital() {
	return relogioDigital.text((new Date()).toLocaleTimeString('pt-BR'))
}

function atualizarRelogioSmart() {
	const hora = new Date()
	const strDia = new Date().toLocaleDateString('pr-BR', { weekday: "short" }).slice(0, 3)

	semana.text(strDia.toLocaleUpperCase())
	data.text((new Date()).toLocaleDateString('pt-BR'))
	hSmart.text(hora.getHours().toString().padStart(2, '0'))
	mSmart.text(hora.getMinutes().toString().padStart(2, '0'))
	sSmart.text(hora.getSeconds().toString().padStart(2, '0'))
}

function atualizarDadosMetereologicos() {
	dadosMeteorologicos().then((data) => {
		tempMax.text(data.day1.temperature_max)
		tempMin.text(data.day1.temperature_min)
		umidad.text(data.day1.humidity)
	}).catch(error => {
		temp.text('?')
		umidad.text('?')
		console.log(error.mensage)
	})
}

export { atualizarRelogioDigital, atualizarRelogioSmart, atualizarDadosMetereologicos }
