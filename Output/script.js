// Gravando na saída de um elemento
document.getElementById('demo').style.backgroundColor = '#1F1F1F'
document.getElementById('demo').style.color = '#ccc'

let x = document.querySelector('.paragrafo')
// .INNNERHTML escreve em um elemento
x.innerHTML = 'Texto alterado'
// .TEXTCONTET faz o mesmo que .INNERHTML
x.textContent = 'Texto alterado pela segunda vez'
// document.write() grava na saída do html
document.write('Esse é um texto gerado usando document.write()')
// window.alert() chama o objeto window e escreve o conteúdo num pop up
// pode ser usado com ou sem o objeto window
// alert('primeiro pop up') ou window.alert('primeiro pop up')


