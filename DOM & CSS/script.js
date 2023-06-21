let titulo = document.querySelector('h1')
titulo.textContent = 'Manipulação de CSS com Js'
// OBS: o atributo .textContent faz o mesmo que o .innerHTML
let imagem = document.querySelector('#foto')
// Alterar propriedades com .setAttribute('nome do atributo', 'valor do atributo')
imagem.setAttribute('src', 'pride-fc.jpg')
imagem.setAttribute('width', '200px')


// Modificar CSS
titulo.style.color = 'red'
titulo.style.backgroundColor = '#00F123'
titulo.style.borderRadius = '2rem'
let box = document.querySelectorAll('.box')
// O code abaixo está atribuindo o objeto box[0], isto é, o primeiro 'article' uma classe já definida na folha css


/* 
É útil, pois na folha css com esse seletor '.azul' é possível atribuir quantas propriedades forem necessárias,
e usando o atributo .style.propertie só é possível acessar uma propriedade do vez
*/
box[0].setAttribute('class', 'azul')
// Para remover um atributo usar o .removeAttribute	
// Nesse caso irá remover todas as class aplicadas
box[0].removeAttribute('class')


let tela = document.querySelector('.tela-principal'),
	btnDark = document.querySelector('#btdark'),
	btnLight = document.querySelector('#btlight')
// O atributo .addEventListener() é um 'escutador de eventos'
// Explicação do code abaixo: quando ouver um evento de 'click' a function modoDark() será executada
btnDark.addEventListener('click', modoDark)
// Explicação do code abaixo: quando ouver um evento de 'click' a function modoLight() será executada
btnLight.addEventListener('click', modoLight)


function modoDark() {
	// mostrar no console que o modo dark está ativado
	console.log('modo dark actived')
	// adicionar a class .dark ao objeto 'tela'
	tela.classList.add('dark')
	// remover a class .light ao objeto 'tela', só por garantia
	tela.classList.remove('light')
}

function modoLight() {
	// mostrar no console que o modo light está ativado
	console.log('modo light actived')
	// adicionar a class .light ao objeto 'tela'
	tela.classList.add('light')
	// remover a class .dark ao objeto 'tela', só por garantia
	tela.classList.remove('dark')
}