import { $situacao } from "./dom.js";

function calcularMediaAritmetica(firstNumber, secondNumber) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  return (firstNumber + secondNumber) / 2;
}

function situacaoALuno(media) {
  if (media <= 5) {
    $situacao.attr("class", "reprovado");
    return "Reprovado";
  } else if (media > 5 && media < 7) {
    $situacao.attr("class", "recuperacao");
    return "Recuperação";
  } else if (media >= 7) {
    $situacao.attr("class", "aprovado");
    return "Aprovado";
  }
}

export { calcularMediaAritmetica, situacaoALuno };
