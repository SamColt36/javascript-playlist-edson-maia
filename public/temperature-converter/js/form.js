import { $btnZerar } from './dom.js'
import { inserirDadosNosDisplays } from './main.js'

$btnZerar.click(e => {
	inserirDadosNosDisplays(0, 32, 273)
	e.preventDefault()
})