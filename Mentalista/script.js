let numeroSecreto = 0
function gerarNumeroSecreto() {
	numeroSecreto = (Math.random() * 10).toFixed(0)
	console.log(numeroSecreto)
}

const inputNumero = document.getElementById('inputNumero')
let inputValue = parseFloat(inputNumero.value)
const aviso = document.getElementById('aviso')

function validarNumeroDigitado() {
	if (inputValue > 10 || inputValue < 0 || isNaN(inputValue)) {
		aviso.textContent = 'Digite um valor entre 0 e 10'
		aviso.classList.add('class', 'errou')
	}
	setTimeout(function () {
		aviso.classList.remove('class', 'errou')
		aviso.textContent = null
		inputNumero.value = ''
	}, 1750)
}
const musicaDeFundo = document.getElementById('musicaDeFundo')
function tocarMusicaDeFundo() {
	if (musicaDeFundo.play()) {
		musicaDeFundo.muted()
	}
	else{
		musicaDeFundo.play()
	}
}
function ativarBtnChutar() {
	if (inputValue == numeroSecreto) {
		console.log('acertou miserável')
	}
}