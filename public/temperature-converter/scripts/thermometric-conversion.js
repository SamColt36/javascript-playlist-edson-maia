const celsioTofahrenheit = (celsio) => {
  return 1.8 * parseFloat(celsio) + 32;
};

const celsioToKelvin = (celsio) => {
  return parseFloat(celsio) + 273;
};

const fahrenheitToCelsio = (fahrenheit) => {
  return (parseFloat(fahrenheit) - 32) / 1.8;
};

const fahrenheitToKelvin = (fahrenheit) => {
  return (parseFloat(fahrenheit) + 459.67) * (5 / 9);
};

const kelvinToCelsio = (kelvin) => {
  return parseFloat(kelvin) - 273.15;
};

const kelvinToFahrenheit = (kelvin) => {
  return parseFloat(kelvin) * (9 / 5) - 549.67;
};

export {
  celsioToKelvin,
  celsioTofahrenheit,
  fahrenheitToCelsio,
  fahrenheitToKelvin,
  kelvinToCelsio,
  kelvinToFahrenheit,
};
