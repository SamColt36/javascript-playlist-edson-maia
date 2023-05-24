let objetoQualquer = {
	nome: "Sam",
	sobrenome: "Colt",
	idade: 22,
	// também é possível adicionar função dentro do elemento do objeto
	nomeCompleto: function () { return this.nome + " " + this.sobrenome }
}
document.getElementById("demo").innerHTML = objetoQualquer.nomeCompleto()