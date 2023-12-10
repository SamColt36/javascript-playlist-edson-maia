import { $quoteOutput } from './dom.js'
import { getImages } from './api.js'

async function generateBackground() {
	const images = await getImages()
	const data = await images

	return $quoteOutput.css({
		'background-image': `url("${data}")`,
	})
}

const resetBackkground = () => {
	$quoteOutput.empty().css('background-image', '')
}

export { generateBackground, resetBackkground }