let page = document.getElementById('demo')
page.style.backgroundColor = '#1F1F1F'
page.style.color = '#ccc'

// No DOM todos os elementos HTML são vistos como objetos
// Acessar conteúdo de elementos com INNERHTML ou 
let p = document.querySelector('p')
document.write("Geracom com INNERHTML" + p.innerHTML + "<br>")
document.write("Geracom com TEXTCONTENT" + p.textContent)