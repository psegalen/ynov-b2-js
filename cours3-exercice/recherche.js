import Helpers from "./Helpers.js";
import { apiKey } from "./media.js";

const creerCase = resultat => {
  // Renvoyer tout le DOM d'une case
  const lien = document.createElement("a");
  lien.href = `#${resultat.media_type}/${resultat.id}`;
  lien.innerText =
    resultat.media_type === "movie" ? resultat.title : resultat.name;
  return lien;
};

const traiterResultats = data => {
  console.log(data);
  // Boucle sur les résultats
  for (let i = 0; i < data.length; i++) {
    const resultat = data[i];
    if (resultat.media_type === "movie" || resultat.media_type === "tv") {
      Helpers.id("resultats").appendChild(creerCase(resultat));
    }
  }
};

const rechercher = () => {
  const mots = Helpers.id("motsRecherches").value;
  console.log("Recherche de", mots);

  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fr-FR&query=${mots}`;
  axios
    .get(url)
    .then(response => traiterResultats(response.data.results))
    .catch(error => console.error(error));
};

export default rechercher;
