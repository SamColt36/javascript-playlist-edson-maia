import { $inputNumero, $btnChutar, $aviso, $btnSom } from './dom.js'
import { gerarNumeroSecreto } from './numeroSecreto.js'
import { validarNumeroDigitado } from './funcoes-auxiliares.js'

const numeroSecreto = gerarNumeroSecreto()
const musica = new Audio('./audio/abertura-the-mentalist.mp3')

let count = 1

function tocarMusicaDeFundo() {
	return musica.play()
}

function ativarBtnChutar() {
	setTimeout(() => {
		$btnChutar.removeClass('bloqueado')
		$aviso.html('')
		$aviso.removeClass('acertou errou')
	}, 1000)
}

function jogar() {
	if (($inputNumero.val()).trim() !== '') {
		if (parseInt($inputNumero.val()) === numeroSecreto) {
			$aviso.html(`Acertou, o número secreto é ${numeroSecreto}`)
			$aviso.addClass('acertou')
			$aviso.removeClass('errou')

			setTimeout(() => location.reload(), 1500)
		} else {
			$aviso.html('Errou. Porém, tente mais uma vez!')
			$aviso.addClass('errou')
			$aviso.removeClass('acertou')
		}
	}
}

function ativarDesativarMusica() {
	count++
	return (count % 2 === 0) ? musica.pause() : musica.play()
}

$inputNumero.blur(function (e) {
	validarNumeroDigitado($inputNumero.val())
	e.preventDefault()
})

$inputNumero.click(function (e) {
	tocarMusicaDeFundo()
	ativarBtnChutar()
	e.preventDefault()
})

$btnChutar.click(function (e) {
	jogar()
	e.preventDefault()
})

$btnSom.click(function (e) {
	ativarDesativarMusica()
	e.preventDefault()
})