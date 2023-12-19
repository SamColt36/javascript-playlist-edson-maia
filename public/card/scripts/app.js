import { createCards } from "./functions.js";
import { fetch_json } from "./fetch.js";

const object = await fetch_json();

createCards(object);


