document.getElementById("demo").style.backgroundColor = "#1F1F1F" 	
// Criando arrays
let produtos = ['TV', 'Tablet', 'Microcomputer']
var code = Array('Primeiro', 'Segundo', 'Terceiro')

// Adicionar elementos no final com push = empurrar 
produtos.push('Iphone', 'HDD')

// Remover mentos no final com com pop = estourar
// pop() é um método que não recebe parâmetros
produtos.pop()

// Adicionar elementos no início do array
produtos.unshift('DOM', 'REL')

// Remover elementos no início do array
produtos.shift()

// Remover de uma posição específica
// splice = emendar
// sintaxe: (posição inicial, quantos remover a partir da posição inicial)
produtos.splice(0,2)


