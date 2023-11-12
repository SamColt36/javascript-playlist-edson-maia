import { getRandomInt } from "./random.js"

let numeroRamdomico
const music = new Audio('./audio/dado-rolando.mp3')

$('#btnSortear').click(e => {
	music.play()
	numeroRamdomico = getRandomInt(1, 6)

	$('#imgDado').addClass('animar')
	$('#sorteado').addClass('aparecer')
	$('#btnSortear').css('display', 'none')

	setTimeout(() => {
		$('#sorteado').html(numeroRamdomico)
		$('#imgDado').attr('src', `./images/${numeroRamdomico}.png`)

		$('#btnSortear').css('display', 'inline-block')

		$('#imgDado').removeClass('animar')
		$('#sorteado').removeClass('aparecer')
	}, 1500)

	e.preventDefault()
})