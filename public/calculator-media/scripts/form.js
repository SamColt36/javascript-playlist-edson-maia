import { $inputNota1, $inputNota2, $situacao } from './dom.js'
import { alertPersonalizado } from "./main.js"

export function clearForm() {
	$('input').val('')
	$situacao.attr('class', 'default')
}

function validarInputValues(firstNumber, secondNumber) {
	if (firstNumber < 0 || secondNumber < 0 || firstNumber > 10 || secondNumber > 10) {
		alertPersonalizado()
		setTimeout(clearForm, 1500)
	}
}

$($inputNota1, $inputNota2).change(e => {
	validarInputValues($inputNota1.val(), $inputNota2.val())
	e.preventDefault()
})