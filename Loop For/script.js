document.getElementById("demo").style.backgroundColor = "#105846"
document.getElementById("demo").style.color = "#dddddd"

for (let i = 1; i <= 50; i++) {
	document.write(i + " ")
}
for (let i = 50; i >= 1; i--) {
	document.write(i + " ")
}
document.write("<hr>")

// FOREACH forEach = para cada
// A propriedade .forEach(funcion(nomeDoObjeto, index) {block code})
// Geralmente usa como parâmetro da propriedade .forEach uma função anônima
let flv = ['Laranja', 'Goiaba', 'Melancia', 'Cenoura', 'Beteraba'] 
flv.forEach(function(flv, i) {
	document.write(`${i} ${flv} <br>`)
});
// Se quiser acessar somente o valor de cada posição não é necessário colocar o index como argumento da funcion
flv.forEach(function (flv) {
	document.write(`${flv} <br>`)
});