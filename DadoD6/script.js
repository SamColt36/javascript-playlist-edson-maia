// 	Seleção dos elementos
let numeroSorteado = 0
let sorteado = document.getElementById('sorteado')
let imgDado = document.getElementById('imgDado')
let btnSortear = document.getElementById('btnSortear')
let audio = document.getElementById('dadoRolando')


btnSortear.addEventListener('click', function () {
	imgDado.classList.add('animar')
	sorteado.classList.add('aparecer')
	audio.play()
	btnSortear.style.display = 'none'

	setTimeout(function () {
		numeroSorteado = getRandomInt(1, 6)
		console.log(numeroSorteado)
		imgDado.setAttribute('src', 'images/' + numeroSorteado + '.png')
		sorteado.textContent = numeroSorteado
		btnSortear.style.display = 'inline-block'
		imgDado.classList.remove('animar')
		sorteado.classList.remove('aparecer')

	}, 1750)
})

function getRandomInt(min, max) {
	min = Math.ceil(min); // arredonda para o int acima
	max = Math.floor(max); // arredonda para o int abaixo
	return Math.floor(Math.random() * (max - min + 1) + min);
}