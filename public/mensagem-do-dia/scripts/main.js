import { generateBackground, resetBackkground } from './generateBackground.js'
import { $dataInput, $quoteInput, $authorshipInput, $btnCreate, $btnClear } from './dom.js'
import { createQuote, getAuthorship, getQuote, clearInputs } from './inputs.js'

const alertCustom = () => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'É obrigatório escolher uma data, digitar uma citação e autoria antes de postar.',
		footer: '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137">Gostou do alert() diferenciado?! Confere o link.</a>',
	})
}

const generateImage = async () => {
	await generateBackground()
	const cite = $('#citacao00')[0]
	const canvas = await html2canvas(cite, {
		useCORS: true,
		logging: true,
		allowTaint: true,
		backgroundColor: null,
		scale: window.devicePixelRatio
	})
	$(cite).empty()
	resetBackkground()
	cite.append(canvas)
}


$btnCreate.click(async function (e) {
	const situationInputDate = $dataInput.val()
	const situationInputQuote = $quoteInput.val()
	const situationInputAuthorship = $authorshipInput.val()

	if (situationInputDate !== false
		&& situationInputQuote !== false
		&& situationInputAuthorship !== false) {

		createQuote()
		getQuote()
		getAuthorship()
		generateImage()
		window.scroll(0, 750)
	} else {
		alertCustom()
	}
	e.preventDefault()
})

$btnClear.click(function (e) {
	clearInputs()
	resetBackkground()
	window.scroll(0, 0)
	e.preventDefault()
})
