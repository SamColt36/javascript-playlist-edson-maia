import { $resetButton } from "./dom.js";
import { inserirDadosNosDisplays } from "./main.js";

$resetButton.click((e) => {
  inserirDadosNosDisplays(0, 32, 273);
  e.preventDefault();
});
