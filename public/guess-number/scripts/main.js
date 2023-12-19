import { $inputNumber, $buttonKick, $notice, $buttonSound } from "./dom.js";
import { generateSecretNumber } from "./numeroSecreto.js";
import { validateEnteredNumber } from "./funcoes-auxiliares.js";

const secretNumber = generateSecretNumber();
const music = new Audio("./audio/abertura-the-mentalist.mp3");

let count = 1;

const playBackgroundMusic = () => {
  return music.play();
};

const activateKickButton = () => {
  setTimeout(() => {
    $buttonKick.removeClass("bloqueado");
    $notice.html(false).removeClass("acertou errou");
  }, 1000);
};

const trigger = () => {
  if ($inputNumber.val().trim() !== "") {
    if (parseInt($inputNumber.val()) === secretNumber) {
      $notice
        .html(`Acertou, o número secreto é ${secretNumber}`)
        .addClass("acertou")
        .removeClass("errou");

      setTimeout(() => location.reload(), 1500);
    } else {
      $notice
        .html("Errou. Porém, tente mais uma vez!")
        .addClass("errou")
        .removeClass("acertou");
    }
  }
};

const enableOrDisableMusic = () => {
  count++;
  return count % 2 === 0 ? music.pause() : music.play();
};

$inputNumber.blur(function (e) {
  validateEnteredNumber($inputNumber.val());
  e.preventDefault();
});

$inputNumber.click(function (e) {
  playBackgroundMusic();
  activateKickButton();
  e.preventDefault();
});

$buttonKick.click(function (e) {
  trigger();
  e.preventDefault();
});

$buttonSound.click(function (e) {
  enableOrDisableMusic();
  e.preventDefault();
});
