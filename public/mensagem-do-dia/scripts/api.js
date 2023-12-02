import { createClient } from '../node_modules/pexels/dist/main.js'

const client = createClient('IvtJEQNWC4iFB0UrtKN5jCpbamoJjhMUvWRp28gHUn5u2IrHFEQeXOE8')

const getImages = async () => {
	try {
		const getRandomNumber = (min, max) => {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		const requestImage = await client.photos.search({
			query: 'texture background',
			orientation: 'square',
			size: 'medium',
			per_page: 1,
			page: getRandomNumber(0, 10)
		})
		return requestImage.photos[0].src.medium
	} catch (error) {
		console.error('Erro ao buscar fotos:', error)
	}
}

export { getImages }