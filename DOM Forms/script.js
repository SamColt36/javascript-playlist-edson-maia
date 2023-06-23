let page = document.getElementById('demo')
page.style.backgroundColor = '#1F1F1F'
page.style.color = '#ccc'

// Abaixo fiz a seleção usando o .forms
// Primeiro selecionei o formulário pelo 'id' depois o elemento via 'name'

function validarCamposDeEntrada() {
	let x = document.forms['formulario']['fname'].value
	if (x == '') {
		alert('Campos de entrada vazios')
	}
}

// Validação de formulário pode ser usando atributos HTMl 'required'
// VALIDAÇÃO DE DADOS CASOS A SE TRATAR
// 1: Preenchimento de todos os campos
// 2: Inserção de data válida
// 3: Entrada de formato diferente. Número em texto; e texto em número

// Exemplo Prático
// Todos os campos do lado HTML já estão 'required' logo não é necessário criar implementação em js para campos sem entrada
// 