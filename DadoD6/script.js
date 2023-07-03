// 	Seleção dos elementos
let numeroSorteado = 0
let	sorteado = document.getElementById('sorteado')
let	imgDado = document.getElementById('imgDado')
let	btnSortear = document.getElementById('btnSortear')
let	audio = document.getElementById('dadoRolando')


btnSortear.addEventListener('click', function () {
	imgDado.classList.add('animar')
	sorteado.classList.add('aparecer')
	audio.play()
	btnSortear.style.display = 'none'
	console.log('casa')
})