let string1 = 'essa string foi declarada com aspas simples',
	string2 = "essa string foi declarada com aspas duplas"
// Para saber o comprimento de uma String usa-se a propriedade .lenght
document.write(string1.length + "<br>")
document.write(string2.length + "<br>")
// Para declarar aspas simples e duplas dentro de uma String usa-se
// \'	para gerar '
// \"	para gerar "
// \\	para gerar \
let string3 = "Esta string esta dentro de \"aspas\""
document.write(string3 + "<br>")
// A comparação de dois objetos JavaScript sempre retorna false.
let x = new String("John");
let y = new String("John");
document.write(x == y + "<br>")
document.write(x === y + "<br>")




