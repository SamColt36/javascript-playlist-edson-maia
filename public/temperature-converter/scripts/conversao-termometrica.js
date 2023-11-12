function celsioTofahrenheit(celsio) {
	return (1.8 * parseFloat(celsio) + 32)
}

function celsioToKelvin(celsio) {
	return (parseFloat(celsio) + 273)
}

function fahrenheitToCelsio(fahrenheit) {
	return ((parseFloat(fahrenheit) - 32) / 1.8)
}

function fahrenheitToKelvin(fahrenheit) {
	return (parseFloat(fahrenheit) + 459.67) * (5 / 9)
}

function kelvinToCelsio(kelvin) {
	return (parseFloat(kelvin) - 273.15)
}

function kelvinToFahrenheit(kelvin) {
	return (parseFloat(kelvin) * (9 / 5) - 549.67)
}

export { celsioToKelvin, celsioTofahrenheit, fahrenheitToCelsio, fahrenheitToKelvin, kelvinToCelsio, kelvinToFahrenheit }