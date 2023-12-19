import {
  valueInReal,
  selectedCurrency,
  notice,
  buttonConvert,
  buttonClear,
} from "./dom.js";
import { disableButton, activateButton } from "./form.js";
import { convertCurrency, symbol } from "./moeda.js";

selectedCurrency.forEach((input) =>
  input.addEventListener("input", (e) => {
    activateButton();
    e.preventDefault();
  })
);

valueInReal.addEventListener("input", (e) => {
  activateButton();
  e.preventDefault();
});

$(buttonConvert).click((e) => {
  Array.from(selectedCurrency).some((e) => {
    if (e.checked)
      convertCurrency(e.value, valueInReal.value).then((response) => {
        const real = Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(valueInReal.value);
        $(notice).html(
          `O valor ${real} convertido em ${e.value} é ${symbol(
            e.value
          )} ${response.toFixed(2)}`
        );
      });
  });
  e.preventDefault();
});

$(buttonClear).click((e) => {
  disableButton();
  valueInReal.focus();
  $(valueInReal).prop("value", null);
  $('input[name="moedaEstrangeira"]').prop("checked", false);
  $(notice).html("Digite o valor, escolha a moeda e converter");
  console.clear();
  e.preventDefault();
});
