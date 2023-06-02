document.getElementById("demo").style.backgroundColor = "#105846"
document.getElementById("demo").style.color = "#dddddd"
// FOR OF = percorrer objetos iterativos
// for (variavel of iteravel)
// Caso Array
let array1 = [10, 20, 30, 40]
for (const iterator of array1) {
	document.write(`<h3> ${iterator} </h3>`)
}
document.write("<hr>")

// Caso String
let array2 = "OlaMundo"
for (const iterator of array2) {
	document.write(`<p> ${iterator} </p>`)
}