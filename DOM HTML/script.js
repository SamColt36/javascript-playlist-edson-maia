let page = document.getElementById('demo')
page.style.backgroundColor = '#1F1F1F'
page.style.color = '#ccc'

// O HTML DOM permite que o js altere oconteúdo dos elementos html
// Para  texto temos .innerHTML e .textContent
let ex1 = document.querySelector('#ex1').innerHTML = 'Texto modificado'

// Modificando atributos
let ex2 = document.querySelector('#ex2').src = '../assets/ico.png'

// Conteúdo dinâmico
let ex3 = document.querySelector('#ex3').innerHTML = `Data: ${Date()}`

// Gravando na saída do HTML
// Ao usar o document.write após o carregamento do site ele apaga todo o conteúdo HTML 
function enviar() {
	document.write(Date())
}