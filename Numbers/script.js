document.getElementById("demo").style.backgroundColor = "#1F1F1F"
document.getElementById("demo").style.color = "white"

/*

let peso = 50.4, altura = 1.76
let imc = peso / (altura ** 2)
let price = 12.8956
// Método toFixed() captura a aproximação decimal
document.write(`${imc.toFixed(2)} <br>`)
// Formatação de preço brasileiro com duas casas decimais, arredondamento e símbolo monetário
document.write(`${price.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL' })}`)

*/

// Desafios sugeridos 01
let nome = "Fedor Vladimirovich Emeliamenko", nacionalidade = "Russo", idade = 44, peso = 106, altura = 1.83
document.write('<h2>Informações</h2>')
document.write(`Lutador: ${nome} <br>`)
document.write(`Nacionalidade: ${nacionalidade} <br>`)
document.write(`Idade: ${idade} anos <br>`)
document.write(`Peso: ${peso}kg <br>`)
document.write(`Altura: ${altura}m <br> <br>`)
// Desafios sugeridos 02
const dia = 10,
	mes = 9,
	ano = 2021,
	frase = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência  se resume a curiosidade",
	autor = "Aaron Swartz"
document.write('<h2>Frase do dia</h2>')
document.write(`${dia}/${mes}/${ano} <br>`)
document.write(`${frase} <br>`)
document.write(`${autor} <br>`)
// Desafios sugeridos 03
document.write('<h2>Array de meses do ano</h2>')
const meses = [' Janeiro' ,' Fevereiro',' Março',' Abril',' Maio', ' Junho', ' Julho', ' Agosto', ' Setembro', ' Outubro', ' Novembro', ' Dezembro']
document.write(`${meses} <br>`)
// Desafios sugeridos 04
let jogo = { jogoNome: "League of legends", dev: "Riot Games", launch: 2009 }
document.write('<h2>Objeto jogo</h2>')
document.write(`Nome do jogo: ${jogo.jogoNome} <br>`)
document.write(`Desenvolvido por: ${jogo.dev} <br>`)
document.write(`Ano de lançamento${jogo.launch} <br>`)







