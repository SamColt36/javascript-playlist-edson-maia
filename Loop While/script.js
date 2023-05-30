document.getElementById("demo").style.backgroundColor = "#105846"
document.getElementById("demo").style.color = "#dddddd"
// Percorrer array com while
let flv = ['Laranja', 'Goiaba', 'Melancia', 'Cenoura', 'Beteraba'] , cont = 0
while (cont < flv.length) {
	document.write(flv[cont] + "<br>")
	cont++
}

// DO WHILE = faça enquanto
// Executa a condição so no fim, por isso irá executar ao menos uma vez
document.write("<hr>")
cont = 0
do {
	document.write(flv[cont] + "<br>")
	cont++
} while (cont < flv.length)