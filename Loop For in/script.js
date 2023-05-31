document.getElementById("demo").style.backgroundColor = "#105846"
document.getElementById("demo").style.color = "#dddddd"
// FORIN for in = percorre as propriedades de um objeto ou array. De uma coleção em geral
const pessoas = { nome: "John Doe", altura: 1.76, idade: 22, peso: 50.5 }
for (let i in pessoas) {
	document.write(pessoas[i] + "<br>")
}
// Exemplo percorrer array. Não é recomendado
const array = ['onde', 'voce', 'casa', 'torcer', 'alfazema', 'amora']
for (let i in array) {
	document.write(array[i] + '<br>')
}
// Para percorrer arrays da maneira correta usa-se o .forEach(function(){})
// Onde a function usada como parâmetro do forEach é uma função anônima
// FOREACH forEach = para cada
// A propriedade .forEach(funcion(nomeDoObjeto, index) {block code})
// Geralmente usa como parâmetro da propriedade .forEach uma função anônima
let flv = ['Laranja', 'Goiaba', 'Melancia', 'Cenoura', 'Beteraba']
flv.forEach(function (flv, i) {
	document.write(`${i} ${flv} <br>`)
});
// Se quiser acessar somente o valor de cada posição não é necessário colocar o index como argumento da funcion
flv.forEach(function (flv) {
	document.write(`${flv} <br>`)
});
