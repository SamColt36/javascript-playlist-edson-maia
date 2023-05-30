document.getElementById("demo").style.backgroundColor = "#105846"
document.getElementById("demo").style.color = "#dddddd"
// for sintaxe:
/*
for (expressão1; expressão3; expressão3) {
	block code
}
onde expressão1 = inicialização do contador
	 expressão2 = condição de execução do loop
	 expressão3 = incremento ou decremento
*/
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
flv.forEach(function (flv, i) {
	document.write(`${i} ${flv} <br>`)
});
// Se quiser acessar somente o valor de cada posição não é necessário colocar o index como argumento da funcion
flv.forEach(function (flv) {
	document.write(`${flv} <br>`)
});

// O JS permite instanciar variáveis dentro dos parâmetros do for
// Mas para isso a empressão1 que comtempla o contador deve separar por vírgula e as demais expressões por ponto e vírgula
// for(expressao1, expressao1, expressao1; expressao2; expressao3) {}
document.write("<hr>")
let nome, j
for (j = 0, nome = "Valor: "; j < 10; j++) {
	document.write(nome + j + "<br>")
}
// As expressoes 1 e 2 podem ser omitidas:
/* for(;expressao2;) {
	block code
	increment/decrement
}
*/
// Ao declarar variável que irá passar pelo loop usando var, ao sair do loop há redefinição da variável
// Isso não acontece se declarar com let
document.write("<hr>")
let fase, cont = 55
console.log(cont)
for (let cont = 0, frase = "Value: "; cont < 10; cont++) {
	document.write(frase + cont + "<br>")
}
console.log(cont)