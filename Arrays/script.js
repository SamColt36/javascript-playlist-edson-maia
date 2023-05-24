document.getElementById("demo").style.backgroundColor = "#1F1F1F" 	
// Criando arrays
let produtos = ['TV', 'Tablet', 'Microcomputer']
var code = Array('Primeiro', 'Segundo', 'Terceiro')

// Adicionar elementos no final com push = empurrar 
produtos.push('Iphone', 'HDD')

// Remover mentos no final com com pop = estourar
// pop() é um método que não recebe parâmetros
// produtos.pop()

// Adicionar elementos no início do array
produtos.unshift('DOM', 'REL')

// Remover elementos no início do array
// produtos.shift()

// Remover de uma posição específica
// splice = emendar
// sintaxe: (posição inicial, quantos remover a partir da posição inicial)
produtos.splice(0,2)

// Copiar array slice = fatiar porção
// sintaxe: (posição inicial, quantos copiar a partir da posição inicial)
// se usar o método slice() sem atributos o array será totalmente copiado
let produtosAvariados = produtos.slice()
let produtosEmEstoque = produtos.slice(0,3)

// O método lenght() retorna o tamanho do array
// Operador spreed ... copiar
// No exemplo abaixo o array produtosAdendo[] vai receber uma cópia de produtos[] e adicionar doisw elementos
let produtosAdendo = [...produtos, 'Mouse', 'Monitor']

// Acessar posição de array
// produtos[0]
// Alterar valor de posição de array
produtos[2] = 'Valor Alterado'

