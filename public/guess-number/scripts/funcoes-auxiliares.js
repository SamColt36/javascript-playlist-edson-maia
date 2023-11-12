function alertPersonalizado() {
	return Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Só são permitidos valores entre 0 e 10',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137" target="_blank">Gostou do alert() diferenciado?! Confere o link.</a>'
	})
}

function validarNumeroDigitado(value) {
	if (value < 0 || value > 10) {
		alertPersonalizado()
		setTimeout(() => {
			inputNumero.val('')
		}, 1250)
		btnChutar.toggleClass('bloqueado')
	}
}

export {validarNumeroDigitado}