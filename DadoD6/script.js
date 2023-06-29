// 	Seleção dos elementos
let numeroSorteado = 0
let	sorteado = document.querySelector('#sorteado')
let	imgDado = document.querySelector('#imgDado')
let	btnSortear = document.querySelector('#btnSortear')
let	audio = document.querySelector('#dadoRolando')


btnSortear.addEventListener('click', function () {
	imgDado.classList.add('animar')
	sorteado.classList.add('aparecer')
	audio.play()
	btnSortear.sty
})