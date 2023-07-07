let numeroSecreto = 0
function gerarNumeroSecreto() {
	numeroSecreto = parseInt(Math.random() * 10)
	console.log(numeroSecreto)
}

let inputNumero = document.getElementById('inputNumero')
let aviso = document.getElementById('aviso')
let btnChutar = document.getElementById('btnChutar')
btnChutar.disabled = true

function validarNumeroDigitado() {
	if (parseInt(inputNumero) < 0 || parseInt(inputNumero) > 10 || isNaN(parseInt(inputNumero))) {
		aviso.classList.add('errou')
		aviso.textContent = 'Digite uma número entre 0 e 10'
		inputNumero.value = ''
		setTimeout(function () {
			aviso.classList.remove('errou')
			aviso.textContent = ''
		}, 1750)
	} else btnChutar.disabled = false

}

let musicaDeFundo = document.getElementById('musicaDeFundo')
function ativarDesativarMusica() {
	if (musicaDeFundo.muted || musicaDeFundo.pause()) {
		musicaDeFundo.play()
	} else {
		musicaDeFundo.pause()
	}
}

function tocarMusicaDeFundo() {
	musicaDeFundo.play()
}

function jogar(){
	validarNumeroDigitado()
	if (parseInt(inputNumero.value) == numeroSecreto){
		aviso.classList.remove('errou')
		aviso.classList.add('acertou')
		aviso.textContent = 'Acertou a senha: ' + numeroSecreto
		setTimeout(function () {
			aviso.classList.remove('acertou')
			aviso.textContent = ''
			inputNumero.value = ''
		}, 2000)
	}
	else console.log('errou a senha')
}