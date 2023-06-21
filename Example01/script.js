let box = document.querySelector('.box')
let btnAvancar = document.querySelector('#depois')
btnAvancar.addEventListener('click', avancar)
let btnVoltar = document.querySelector('#antes')
btnVoltar.addEventListener('click', voltar)

function avancar() {
	console.log('avancar 300px')
	box.classList.add('avancar')
	box.classList.remove('voltar')
}
function voltar() {
	console.log('voltar 300px')
	box.classList.remove('avancar')
	box.classList.add('voltar')
}