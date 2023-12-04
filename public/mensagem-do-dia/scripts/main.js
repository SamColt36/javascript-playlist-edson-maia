import { generateBackground, resetBackkground } from './generateBackground.js'
import { $dataInput, $quoteInput, $authorshipInput, $btnCreate, $quoteOutput, $btnClear, strEmpty } from './dom.js'
import { createQuote, getAuthorship, getQuote, clearInputs } from './inputs.js'

const alertCustom = () => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'É obrigatório escolher uma data, digitar uma citação e autoria antes de postar.',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>',
	})
}

$btnCreate.click(async function (e) {
	const situationInputDate = $dataInput.val()
	const situationInputQuote = $quoteInput.val()
	const situationInputAuthorship = $authorshipInput.val()

	if (situationInputDate !== strEmpty
		&& situationInputQuote !== strEmpty
		&& situationInputAuthorship !== strEmpty) {

		createQuote()
		getQuote()
		getAuthorship()
		generateBackground()
		window.scroll(0, 750)
	}
	else {
		alertCustom()
	}
	e.preventDefault()
})

$btnClear.click(function (e) {
	clearInputs()
	resetBackkground()
	e.preventDefault()
})