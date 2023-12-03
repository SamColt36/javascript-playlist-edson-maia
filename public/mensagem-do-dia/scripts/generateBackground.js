import { $quoteOutput } from './dom.js'
import { getImages } from './api.js'

const generateBackground = async () => await getImages().then(data => {
	$quoteOutput.css({
		'background': `url("${data}")`,
		'background-size': 'cover'
	})
})

const resetBackkground = () => {
	$quoteOutput.css('background', `url("")`)
}

export { generateBackground, resetBackkground }