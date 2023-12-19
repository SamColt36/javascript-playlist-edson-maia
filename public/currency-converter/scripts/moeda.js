import { exchangeRateBetweenCurrencies } from "./api.js";

const convertCurrency = (foreignCurrency, brazilianCurrency) => {
  const real = parseFloat(brazilianCurrency);
  switch (foreignCurrency) {
    case "USD":
      return exchangeRateBetweenCurrencies().then((data) => {
        return parseFloat(data[0]) * real;
      });
    case "EUR":
      return exchangeRateBetweenCurrencies().then((data) => {
        return parseFloat(data[1]) * real;
      });
    case "GBP":
      return exchangeRateBetweenCurrencies().then((data) => {
        return parseFloat(data[2]) * real;
      });
    case "BTC":
      return exchangeRateBetweenCurrencies().then((data) => {
        return parseFloat(1 / data[3]) * real;
      });
  }
};

const symbol = (foreignCurrency) => {
  switch (foreignCurrency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "BTC":
      return "";
  }
};

export { convertCurrency, symbol };
