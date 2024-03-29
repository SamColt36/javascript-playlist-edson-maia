import {
  celsioToKelvin,
  celsioTofahrenheit,
  fahrenheitToCelsio,
  fahrenheitToKelvin,
  kelvinToCelsio,
  kelvinToFahrenheit,
} from "./conversao-termometrica.js";
import {
  $celsiusDisplay,
  $fahrenheitDisplay,
  $kelvinDisplay,
  $radioCelsios,
  $radioFahrenheit,
  $radioKelvin,
} from "./dom.js";

$radioCelsios.on("change", (e) => {
  const celsio = Number($radioCelsios.val());
  const kelvin = celsioToKelvin(celsio);
  const fahrenheit = celsioTofahrenheit(celsio);

  inserirDadosNosDisplays(celsio, fahrenheit, kelvin);
  e.preventDefault();
});

$radioKelvin.on("change", (e) => {
  const kelvin = Number($radioKelvin.val());
  const celsio = kelvinToCelsio(kelvin);
  const fahrenheit = kelvinToFahrenheit(kelvin);

  inserirDadosNosDisplays(celsio, fahrenheit, kelvin);
  e.preventDefault();
});

$radioFahrenheit.on("change", (e) => {
  const fahrenheit = Number($radioFahrenheit.val());
  const kelvin = fahrenheitToKelvin(fahrenheit);
  const celsio = fahrenheitToCelsio(fahrenheit);

  inserirDadosNosDisplays(celsio, fahrenheit, kelvin);
  e.preventDefault();
});

const inserirDadosNosDisplays = (celsio, fahrenheit, kelvin) => {
  $celsiusDisplay.val(celsio.toFixed(2));
  $radioCelsios.val(celsio);

  $fahrenheitDisplay.val(fahrenheit.toFixed(2));
  $radioFahrenheit.val(fahrenheit);

  $kelvinDisplay.val(kelvin.toFixed(2));
  $radioKelvin.val(kelvin);
};

export { inserirDadosNosDisplays };
