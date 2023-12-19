import {
  digitalWatch,
  hSmart,
  mSmart,
  sSmart,
  week,
  date,
  tempMax,
  tempMin,
  moisture,
} from "./dom.js";

import { meteorologicalData } from "./api.js";

const updateDigitalClock = () => {
  return digitalWatch.text(new Date().toLocaleTimeString("pt-BR"));
};

const updateSmartWatch = () => {
  const hora = new Date();
  const strDay = new Date()
    .toLocaleDateString("pr-BR", { weekday: "short" })
    .slice(0, 3);

  week.text(strDay.toLocaleUpperCase());
  date.text(new Date().toLocaleDateString("pt-BR"));
  hSmart.text(hora.getHours().toString().padStart(2, "0"));
  mSmart.text(hora.getMinutes().toString().padStart(2, "0"));
  sSmart.text(hora.getSeconds().toString().padStart(2, "0"));
};

const updateMeteorologicalData = () => {
  meteorologicalData()
    .then((data) => {
      tempMax.text(data.day1.temperature_max);
      tempMin.text(data.day1.temperature_min);
      moisture.text(data.day1.humidity);
    })
    .catch((error) => {
      tempMax.text("?");
      tempMin.text("?");
      moisture.text("?");
      console.log(error.mensage);
    });
};

export { updateDigitalClock, updateSmartWatch, updateMeteorologicalData };
