const valueInReal = document.getElementById("valorEmReal");
const selectedCurrency = document.querySelectorAll(
  'input[name="moedaEstrangeira"]'
);
const notice = document.getElementById("aviso");
const buttonConvert = document.getElementById("btnConverter");
const buttonClear = document.getElementById("btnLimpar");

export { valueInReal, selectedCurrency, notice, buttonConvert, buttonClear };
