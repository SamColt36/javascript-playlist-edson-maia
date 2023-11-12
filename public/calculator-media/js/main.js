import { $inputNota1, $inputNota2, $btnCalcular, $btnLimpar, $inputMedia, $situacao } from "./dom.js"
import { calcularMediaAritmetica, situacaoALuno } from './media.js'
import { clearForm } from "./form.js";


export function alertPersonalizado() {
	return Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Só são permitidos valores dentro do intervalo de 0 a 10',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>'
	})
}

$btnCalcular.click(e => {
	const MEDIA = calcularMediaAritmetica($inputNota1.val(), $inputNota2.val())
	$inputMedia.val(MEDIA)
	$situacao.val(situacaoALuno(MEDIA))
	e.preventDefault()
})

$btnLimpar.click(e => {
	clearForm()
	e.preventDefault()
})