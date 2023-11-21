const dayName = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado')

const dataObject = {
	horaCompleta: (new Date()).toLocaleTimeString(),
	hora: (new Date()).getHours(),
	minuto: (new Date()).getMinutes(),
	segundo: (new Date()).getSeconds(),

	diaDaSemana: () => (dayName[(new Date()).getDay()].toLocaleUpperCase()).slice(0, 3),

	diaDoMes: (new Date()).getDate(),
	mes: (new Date()).getMonth() + 1,
	ano: (new Date()).getFullYear(),
}

export { dataObject }