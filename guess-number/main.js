const inputNumero = $('#inputNumero')
const btnChutar = $('#btnChutar')
const aviso = $('#aviso')

const musica = document.getElementById('musicaDeFundo')
const numeroSecreto = gerarNumeroSecreto()

let count = 1

function gerarNumeroSecreto() {
	const min = 1, max = 10
	return Math.floor(Math.random() * (max - min + 1)) + min
}

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

function tocarMusicaDeFundo() {
	return musica.play()
}

function ativarBtnChutar() {
	setTimeout(() => {
		btnChutar.removeClass('bloqueado')
		aviso.html('')
		aviso.removeClass('acertou errou')
	}, 1000)
}

function jogar() {
	if ((inputNumero.val()).trim() !== '') {
		if (parseInt(inputNumero.val()) === numeroSecreto) {
			aviso.html(`Acertou, o número secreto é ${numeroSecreto}`)
			aviso.addClass('acertou')
			aviso.removeClass('errou')
			gerarNumeroSecreto()
		} else {
			aviso.html('Errou. Porém, tente mais uma vez!')
			aviso.addClass('errou')
			aviso.removeClass('acertou')
		}
	}
}

function ativarDesativarMusica() {
	count++
	return (count % 2 === 0) ? musica.pause() : musica.play()
}