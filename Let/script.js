document.getElementById('demo').style.backgroundColor = '#1F1F1F'
document.getElementById('demo').style.color = '#ccc'

// Variáveis definidas com 'let' não podem ser redefinidas
// É possível redeclarar 'var' em qualquer escopo, local ou global
// Variáveis declaradas com 'var' podem ser declaradas em qualquer região do block code

var x = 10
let a = 1
{
	var x = 1
	let a = 2 
}
document.getElementById("nome").innerHTML = x
document.getElementById("sas").innerHTML = a

// Conclusão: é possível redeclarar 'var' em diferentes escopos
// Conclusão: não é redeclarar 'let' em diferentes escopos