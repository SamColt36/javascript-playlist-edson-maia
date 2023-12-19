import { conteudos } from "./dom.js";

const createCards = (obj) => {
  $.ajax({
    url: "../../../public/card/fragments/article.html",
  }).done((data) => {
    obj.lutadores
      .map((item) => {
        const htmlGenerated = data
          .replace(/{foto}/g, item.foto)
          .replace(/{nome}/g, item.nome)
          .replace(/{nacionalidade}/g, item.nacionalidade)
          .replace(/{idade}/g, item.idade)
          .replace(/{peso}/g, item.peso)
          .replace(/{altura}/g, item.altura);

        conteudos.append(htmlGenerated);
      })
      .join("");
  });
  removeDefaultCard();
};

function removeDefaultCard() {
  const templateCard = $(".card:first");
  return templateCard.remove();
}

export { createCards };
