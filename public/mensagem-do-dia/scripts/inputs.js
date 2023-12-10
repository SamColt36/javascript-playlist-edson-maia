import { $dataInput, $quoteInput, $authorshipInput, $quoteTitleOutput, $blockquoteOutput, $quoteAuthorship } from './dom.js'

function createQuote() {
	const srtDate = $dataInput.val().replace(/-/g, '/')
	const objData = new Date(srtDate)
	const dateFormated = objData.toLocaleDateString('pt-BR')
	return $quoteTitleOutput.text(dateFormated)
}

function getQuote() {
	return $blockquoteOutput.text($quoteInput.val())
}

function getAuthorship() {
	return $quoteAuthorship.text($authorshipInput.val())
}

function clearInputs() {
	$('input[type="date"], textarea, input[type = "text"]').val(false)
}

export { createQuote, getAuthorship, getQuote, clearInputs }