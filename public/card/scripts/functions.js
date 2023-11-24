import { conteudos } from './dom.js'

function inserirCardLutadores(object) {
	for (let index = 0; index < (object.lutadores).length; index++) {
		const elem = object.lutadores[index]
		const card = `<article class='card'>
				<img id='foto' class='foto' src="./images/pride/${elem.foto}" alt="Foto de ${elem.name}." />
				<h2 id='nome' class='nome'>${elem.nome}</h2>
				<h3 id='nacionalidade' class='nacionalidade'>${elem.nacionalidade}</h3>
				<h3 id='idade' class='idade'>${elem.idade} anos</h3>
				<h3 id='peso' class='peso'>${elem.peso} Kg</h3>
				<h3 id='altura' class='altura'>${elem.altura} m</h3>
			</article>`
		conteudos.append(card)
	}
	removerTemplateCard()
}

function removerTemplateCard() {
	const templateCard = $('.card:first')
	return templateCard.remove()
}

export { inserirCardLutadores }