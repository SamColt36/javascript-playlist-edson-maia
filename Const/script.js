// Ao declarar uma 'const' deve atribuir de imediato 
// Ao declarar uma matrix constante, o valor de cada posição pode ser alterado mas a matrix como um todo não

const x = ["a", "b", "c"];
x[0] = 1;
alert(x);

// O exemplo acima é similar quando se trata de objetos. OBS: a maneira de instanciar um objeto é diferente de uma matrix
const car = {
	type: "Golf",
	color: "White",
	number: "A123WQRF6"
}
alert(car.number);
// É permitido redeclarar variável do tipo 'const' em outros escopo
