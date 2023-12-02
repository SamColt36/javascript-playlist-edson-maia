import { $dataInput, $quoteInput, $authorshipInput, $quoteTitleOutput, $blockquoteOutput, $quoteAuthorship, strEmpty } from './dom.js'

function createQuote() {
	const srtDate = ($dataInput.val()).replace(/-/g, '/')
	const objData = new Date(srtDate)
	const dateFormated = objData.toLocaleDateString('pt-BR')
	return $quoteTitleOutput.text(dateFormated)
}

function getQuote() {
	const mensageQuote = $quoteInput.val()
	return $blockquoteOutput.text(mensageQuote)
}

function getAuthorship() {
	const quoteAuthorship = $authorshipInput.val()
	return $quoteAuthorship.text(quoteAuthorship)
}

function clearInputs() {
	$dataInput.val(strEmpty)
	$quoteInput.val(strEmpty)
	$authorshipInput.val(strEmpty)

	$quoteTitleOutput.text(strEmpty)
	$blockquoteOutput.text(strEmpty)
	$quoteAuthorship.text(strEmpty)

}
export { createQuote, getAuthorship, getQuote, clearInputs }