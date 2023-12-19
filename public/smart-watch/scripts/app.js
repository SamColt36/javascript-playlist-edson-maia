import {
  updateDigitalClock,
  updateSmartWatch,
  updateMeteorologicalData,
} from "./functions.js";

const updateClock = () => {
  setInterval(() => {
    updateDigitalClock();
    updateSmartWatch();
  }, 1000);
  updateMeteorologicalData();
};

updateClock();
