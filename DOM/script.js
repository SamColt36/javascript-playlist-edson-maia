// DOM = Document Object Model
document.querySelector("#demo").style.backgroundColor = "#1F1F1F"
document.querySelector("#demo").style.color = "white"

// O comando document se refere ao documento html como um todo
// Para selecionar o primeiro elemento por tag, id ou class usa-se o método querySelector()
// No exemplo abaixo o método de seleção foi usado para a tag <h1>
// document.querySelector('h1').style.color = "red"
// No exemplo abaixo o método de seleção foi usado para o id = "container1"
// document.querySelector('#container1').style.color = "blue"
// No exemplo abaixo o método de seleção foi usado para a class = "box3"
// document.querySelector('.box3').style.backgroundColor = "green"

// Para selecionar todos os elementos por tag, id ou class usa-se o método querySelectorAll()
// O método querySelectorAll() criar um array com todos os elementos selecionados e guarda numa variável
// Uma boa práticar é atribuir a seleção a uma variável confome exemplo abaixo
let titulo = document.querySelector('h2')
titulo.style.color = "orange"
// O atributo .textContent altera o valor de texto de um elemento
let container1 =  document.querySelector('#container1>p')
container1.textContent = "Esse tag foi alterado com o atributo .textContent"
// Usando o método .querySelectorAll cria um array contendo todos os elementos selecionados
let box3 = document.querySelectorAll('.box3')
box3[0].style.color = "blue"

// Outros métodos de seleção:
// .getElementByTagName()	obs: seleção por tag
// .getElementById()	obs: não é necessário usar o seletor '#'
// .getElementByClassName()		obs: não é necessário usar o seletor '.'

