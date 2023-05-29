document.getElementById("demo").style.backgroundColor = "#274856"
document.getElementById("demo").style.color = "#f1f1f1"

// MÉTODOS DE STRING
let alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let frase = "Mas que bobagem as rosas não falam."
document.write(`<p> alfabeto = ${alfabeto} </p>`)
document.write("<hr>")
// .length mostra o comprimento do String
let alfabetoComprimento = alfabeto.length
document.write(`<p> alfabeto comprimento = ${alfabetoComprimento} </p>`)
document.write("<hr>")

//.slice(start, end) corta uma String e cria a partir de pontos de interrupção e cria uma String
let quatroPrimeirasLetrasSlice = alfabeto.slice(0,4) // quatro primeiras letras
document.write(`<p> Quatro primeiras letras / .slice(0, 4) = ${quatroPrimeirasLetrasSlice} </p>`)
// Se um parâmetro for negativo, a posição será contada a partir do final da cadeia de caracteres:
let quatroÚltimasLetrasSlice = alfabeto.slice(-4)
document.write(`<p> Quatro últimas letras / .slice(-4) = ${quatroÚltimasLetrasSlice} </p>`)
document.write("<hr>")

let quatroPrimeirasLetrasSubString = alfabeto.substring(0, 4) // quatro primeiras letras
document.write(`<p> Quatro primeiras letras / .substring(0, 4) = ${quatroPrimeirasLetrasSubString} </p>`)
// Se um parâmetro for negativo, a posição será contada a partir do final da cadeia de caracteres:
let quatroÚltimasLetrasSubString = alfabeto.substring(-4)
// Valores negativos como parâmetros do .substring() são tratados como 0
// logo sempre que tiver parâmetro negativo a String permanece a mesma, sem nenhuma extração de conteúdo
document.write(`<p> Quatro últimas letras / .substring(-4) = ${quatroÚltimasLetrasSubString} </p>`)
document.write("<hr>")

// .substr() é semelhante ao .slice()
// Sintaxe: .substr(start, length)
// O exemplo abaixo extraí do String 'frase' a palavra 'rosa'
document.write(`<p> ${frase} </p>`)
let rosa = frase.substr(19, 5)
document.write(`<p> Estraindo a palavra 'rosas'  / .substr(19, 5) = ${rosa} </p>`)
// Se o primeiro parâmetro for negativo, a posição contará a partir do final do corda.
let trecho = frase.substr(-20)
document.write(`<p> Estraindo último trecho / .substr(-21) = ${trecho} </p>`)

// .replace(termo antigo, termo novo) substribui termos de uma String
// essa propriedade substitui a primeira ocorrência do termo a ser substituído
// .replace() é case sensitive, logo atenção a letras maiúsculas e minúsculas
// Não substituí a String por completo mas somente o termo
document.write("<hr>")
let fraseOriginal = "Olá queridos, sejam muito bem vindos a mais um treinamento Windows. O SO mais usado atualmente por usuários comuns em ambientes desktop é o Windows.",
fraseCorrigida = fraseOriginal.replace("Windows", "Linux")
document.write(`<p> Frase original = ${fraseOriginal} </p>`)
document.write(`<p> Frase corrigida com  .replace("Windows", "Linux") = ${fraseCorrigida} </p>`)
// Para ignorar o case sensitive default do .replace usa-se no parâmetro, sem aspas, o sinal /termo/i
// Exemplo: fraseOriginal.replace(/windows/i, "Linux")
fraseCorrigida1 = fraseOriginal.replace(/windows/i, "Linux")
document.write(`<p> Frase corrigida com  .replace(/windows/i, "Linux") = ${fraseCorrigida1} </p>`)
// Para substituir todas as ocorrências usa-se o //g oriundo de 'global'
fraseCorrigida2 = fraseOriginal.replace(/Windows/g, "Linux")
document.write(`<p> Frase corrigida com  .replace(/Windows/g, "Linux") = ${fraseCorrigida2} </p>`)
// .replaceAll() também seleciona todas as ocorrências
// Esse método não funciona no Internet Explorer
fraseCorrigida3 = fraseOriginal.replaceAll("Windows", "Linux")
document.write(`<p> Frase corrigida com  .replaceAll("Windows", "Linux") = ${fraseCorrigida3} </p>`)
document.write("<hr>")

// Converter para maiúscula .toUppercase() e para minúscula .toLowerCase()
document.write(`<p> Frase em uppercase = ${frase.toUpperCase()} </p>`)
document.write(`<p> Frase em lowercase = ${frase.toLowerCase()} </p>`)
// .concat() serve para concatenar duas Strings
let fraseCompilation = frase.concat(' ', fraseOriginal)
document.write(`<p> Frase concatenada com .concat() = ${fraseCompilation} </p>`)
// O método trim() remover espaços em branco entre as extremidades da String
let fraseComEspaco = "			" + frase + "                                     ",
fraseComEspacoRemovido = fraseComEspaco.trim()
document.write(`<p> Comprimento de Frase com espaçamento = ${fraseComEspaco.length} </p>`)
document.write(`<p> Comprimento de Frase sem espaçamento = ${fraseComEspacoRemovido.length} </p>`)