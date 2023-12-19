import { getRandomInt } from "./random.js";

let randomNumber;
const music = new Audio("./audio/dado-rolando.mp3");

$("#btnSortear").click((e) => {
  music.play();
  randomNumber = getRandomInt(1, 6);

  $("#imgDado").addClass("animar");
  $("#sorteado").addClass("aparecer");
  $("#btnSortear").css("display", "none");

  setTimeout(() => {
    $("#sorteado").html(randomNumber);
    $("#imgDado").attr("src", `./images/${randomNumber}.png`);

    $("#btnSortear").css("display", "inline-block");

    $("#imgDado").removeClass("animar");
    $("#sorteado").removeClass("aparecer");
  }, 1500);

  e.preventDefault();
});
