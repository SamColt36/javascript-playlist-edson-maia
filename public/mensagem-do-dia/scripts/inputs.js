import {
  $dataInput,
  $quoteInput,
  $authorshipInput,
  $quoteTitleOutput,
  $blockquoteOutput,
  $quoteAuthorship,
} from "./dom.js";

const createQuote = () => {
  const srtDate = $dataInput.val().replace(/-/g, "/");
  const objData = new Date(srtDate);
  const dateFormated = objData.toLocaleDateString("pt-BR");
  return $quoteTitleOutput.text(dateFormated);
};

const getQuote = () => {
  return $blockquoteOutput.text($quoteInput.val());
};

const getAuthorship = () => {
  return $quoteAuthorship.text($authorshipInput.val());
};

const clearInputs = () => {
  $('input[type="date"]').val("");
  $('textarea').val("");
  $('input[type = "text"]').val("");
};

export { createQuote, getAuthorship, getQuote, clearInputs };
