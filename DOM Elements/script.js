let page = document.getElementById('demo')
page.style.backgroundColor = '#1F1F1F'
page.style.color = '#ccc'

// LOCALIZANDO OBJETOS
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// O método querySelector() pode usar id, class, types, attributes, values of attributes
// Ainda nesse método, o resultado é somente o primeiro objeto
// document.querySelectorAll()
// O método querySelectorÁll() cria um array com todos os objetos 

const x = document.querySelectorAll('#btn')
let text = ''
for(let i = 0; i < x.length; i++) {
	text += x[i].value + '<br>'
}

document.write(text)