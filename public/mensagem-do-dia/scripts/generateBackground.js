import { $quoteOutput } from './dom.js'
import { getImages } from './api.js'

async function generateBackground() {
	const images = await getImages()
	const data = await images

	return $quoteOutput.css({
		'background': `url("${data}")`,
		'background-size': 'cover'
	})
}

const resetBackkground = () => {
	$quoteOutput.css('background', `url("")`)
}

export { generateBackground, resetBackkground }