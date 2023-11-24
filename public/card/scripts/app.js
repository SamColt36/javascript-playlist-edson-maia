import { inserirCardLutadores } from './functions.js'
import { fetch_json } from './fetch.js'

const object = await fetch_json()

inserirCardLutadores(object)