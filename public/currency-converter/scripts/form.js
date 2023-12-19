import { valueInReal, selectedCurrency, buttonConvert } from "./dom.js";

const disableButton = () => {
  $(buttonConvert).removeClass("ativado").prop("disabled", true);
};

const activateButton = () => {
  if (validateInputRadio() === true && valueInReal.value !== "") {
    $(buttonConvert).addClass("ativado").prop("disabled", false);
  } else disableButton();
};

const validateInputRadio = () => {
  return Array.from(selectedCurrency).some((e) => e.checked);
};

export { disableButton, activateButton, validateInputRadio };
