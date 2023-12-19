import { $inputNumber, $buttonKick } from "./dom.js";
const customAlert = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Só são permitidos valores entre 0 e 10",
    footer:
      '<a href="https://medium.com/code-prestige/alertas-bonitos-responsivos-e-customizados-com-o-sweetalert2-8db930038137" target="_blank">Gostou do alert() diferenciado?! Confere o link.</a>',
  });
};

function validateEnteredNumber(value) {
  if (value < 0 || value > 10) {
    customAlert();
    setTimeout(() => {
      $inputNumber.val(false);
    }, 1250);
    $buttonKick.toggleClass("bloqueado");
  }
}

export { validateEnteredNumber };
