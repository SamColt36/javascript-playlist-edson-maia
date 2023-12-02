import { generateBackground, resetBackkground } from './generateBackground.js'
import { $dataInput, $quoteInput, $authorshipInput, $btnCreate, $btnClear, strEmpty } from './dom.js'
import { createQuote, getAuthorship, getQuote, clearInputs } from './inputs.js'

$btnCreate.click(function (e) {
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
	}
	e.preventDefault()
})

$btnClear.click(function (e) {
	clearInputs()
	resetBackkground()
	e.preventDefault()
})