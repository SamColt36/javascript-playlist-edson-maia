// MÉTODOS DE STRING
let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let frase = "Mas que bobagem as rosas não falam."
document.write(`<h2> alfabeto = ${alfabeto} </h2>`)
document.write("<hr>")
// .length mostra o comprimento do String
let alfabetoComprimento = alfabeto.length
document.write(`<h2> alfabeto comprimento = ${alfabetoComprimento} </h2>`)
document.write("<hr>")

//.slice(start, end) corta uma String e cria a partir de pontos de interrupção e cria uma String
let quatroPrimeirasLetrasSlice = alfabeto.slice(0,4) // quatro primeiras letras
document.write(`<h2> Quatro primeiras letras / .slice(0, 4) = ${quatroPrimeirasLetrasSlice} </h2>`)
// Se um parâmetro for negativo, a posição será contada a partir do final da cadeia de caracteres:
let quatroÚltimasLetrasSlice = alfabeto.slice(-4)
document.write(`<h2> Quatro últimas letras / .slice(-4) = ${quatroÚltimasLetrasSlice} </h2>`)
document.write("<hr>")

let quatroPrimeirasLetrasSubString = alfabeto.substring(0, 4) // quatro primeiras letras
document.write(`<h2> Quatro primeiras letras / .substring(0, 4) = ${quatroPrimeirasLetrasSubString} </h2>`)
// Se um parâmetro for negativo, a posição será contada a partir do final da cadeia de caracteres:
let quatroÚltimasLetrasSubString = alfabeto.substring(-4)
// Valores negativos como parâmetros do .substring() são tratados como 0
// logo sempre que tiver parâmetro negativo a String permanece a mesma, sem nenhuma extração de conteúdo
document.write(`<h2> Quatro últimas letras / .substring(-4) = ${quatroÚltimasLetrasSubString} </h2>`)
document.write("<hr>")

// .substr() é semelhante ao .slice()
// sintaxe: .substr(start, length)
// O exemplo abaixo extraí do String 'frase' a palavra 'rosa'
let rosa = frase.substr(19, 5)
document.write(`<h2> ${frase} </h2>`)
document.write(`<h2> Estraindo a palavra 'rosas'  / .SubStr() = ${rosa} </h2>`)


