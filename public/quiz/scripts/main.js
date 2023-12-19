import {
  $instructions,
  $divQuestions,
  $questionNumber,
  $question,
  $responseTrue,
  $responseFalse,
  $notice,
} from "./dom.js";
import { questions } from "./questions.js";

let index = 0;
let placar = 0;

const positiveAudio = new Audio("./audio/positive.mp3");
const positiveNegative = new Audio("./audio/negative.mp3");

const showFirstQuestion = () => {
  index = 0;
  $instructions.text(`Leia a questão e clique na resposta correta`);
  $question.text(questions[index].statement);
  $questionNumber.text(1);
  $notice.text(`Questão ${index + 1} de ${questions.length}`);
};

showFirstQuestion();

const showNextQuestion = (bool) => {
  index++;
  const question = questions[index - 1];

  if (index < questions.length) {
    $question.html(questions[index].statement);
    $questionNumber.text(index + 1);
    $notice.text(`Questão ${index + 1} de ${questions.length}`);

    validateResponse(bool, question);
  } else if (index === questions.length) {
    validateResponse(bool, question);
    gameOver();
    setTimeout(() => {
      showFirstQuestion();
      $divQuestions.css("display", "inline-block");
    }, 2000);
  }
};

const validateResponse = (bool, question) => {
  // ACERTOU
  if (bool === question.rightAlternative) {
    positiveAudio.play();
    placar += 10;
    $divQuestions.addClass("acertou").removeClass("errou");
    $instructions.text(`Pontos ${placar}`);
  }
  // ERROU
  else {
    positiveNegative.play();
    $divQuestions.addClass("errou").removeClass("acertou");
    $instructions.text(`Pontos ${placar}`);
  }
};

const gameOver = () => {
  setTimeout(() => {
    $instructions.text(`Fim de jogo!`);
    $divQuestions.css("display", "none");
    $notice.text(`Você conseguiu atingiu a nota ${placar}.`);
    placar = 0;
  }, 500);
};

const addRemoveStyleContainerWithQuestions = () => {
  return setTimeout(() => {
    $divQuestions.removeClass("acertou errou");
  }, 350);
};

$responseTrue.click((e) => {
  showNextQuestion(true);
  addRemoveStyleContainerWithQuestions();
  e.preventDefault();
});

$responseFalse.click((e) => {
  showNextQuestion(false);
  addRemoveStyleContainerWithQuestions();
  e.preventDefault();
});
