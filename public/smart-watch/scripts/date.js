const dataHora = new Date()
const dayName = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado')

const data = {

	hora: dataHora.getHours(),
	minuto: dataHora.getMinutes(),
	segundo: dataHora.getSeconds(),

	diaDaSemana: () => (dayName[dataHora.getDay()].toLocaleUpperCase()).slice(0, 3),

	diaDoMes: dataHora.getDate(),
	mes: dataHora.getMonth() + 1,
	ano: dataHora.getFullYear(),
}

export { data }