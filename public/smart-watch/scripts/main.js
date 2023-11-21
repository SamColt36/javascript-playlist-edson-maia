// import { dataObject } from './date.js'
import { relogioDigital, telaSmart, relogioSmart, hSmart, mSmart, sSmart, dataSmart, semana, data, temperatura, temp, umidad } from './dom.js'

(function atualizarRelogio() {
	setInterval(() => {
		atualizarRelogioDigital()
		atualizarRelogioSmart()
	}, 1000)
})()

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

function estilizarRelofioSmart() {

}
// fetch('https://api.openweathermap.org/data/3.0/onecall?lat=-3.72294433&lon=-38.59187007&appid={a2d0a2771fbe46b9b8b4c69aa927f7e2}').then(body => body.json()).then(data => console.log(data))
