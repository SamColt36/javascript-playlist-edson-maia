document.getElementById("demo").style.backgroundColor = "#1F1F1F"
document.getElementById("demo").style.color = "white"

// O comando document se refere ao documento html como um todo
// Para selecionar elementos usase o método querySelector()
// No exemplo abaixo o método de seleção foi usado para a tag <h1>
document.querySelector('h1').style.color = "red"
// No exemplo abaixo o método de seleção foi usado para o id = "rpm"
document.querySelector('#rpm').style.color = "blue"