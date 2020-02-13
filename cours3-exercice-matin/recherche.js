import Helpers, { apiKey } from "./Helpers.js";

const traiterResultats = resultats => {
  const divResultats = Helpers.id("resultats");
  divResultats.innerHTML = "";
  resultats.map(resultat => {
    if (resultat.media_type === "movie" || resultat.media_type === "tv") {
      const divResultat = document.createElement("div");
      divResultat.className = "resultat";

      const poster = document.createElement("img");
      poster.src = Helpers.posterUrl(resultat.poster_path);
      poster.style.height = "200px";
      divResultat.appendChild(poster);

      const divInfos = document.createElement("div");
      divInfos.className = "resultat-info";

      Helpers.creerChamp(
        divInfos,
        resultat.media_type === "tv" ? resultat.name : resultat.title,
        "resultat-titre"
      );
      Helpers.creerChamp(
        divInfos,
        resultat.media_type === "movie" ? "Film" : "Série",
        "resultat-type"
      );
      Helpers.creerChamp(
        divInfos,
        Helpers.getAnnee(
          resultat.media_type === "movie"
            ? resultat.release_date
            : resultat.first_air_date
        ),
        "resultat-annee"
      );

      divResultat.appendChild(divInfos);

      const lien = document.createElement("a");
      lien.href = `#${resultat.media_type}/${resultat.id}`;
      lien.appendChild(divResultat);

      divResultats.appendChild(lien);
    }
  });
};

const rechercher = () => {
  const mots = Helpers.id("motsRecherches").value;
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fr-FR&query=${mots}`;
  axios
    .get(url)
    .then(response => traiterResultats(response.data.results))
    .catch(error => {
      console.error(error);
    });
};

const initRecherche = () => {
  Helpers.id("boutonRechercher").addEventListener("click", rechercher);
};

export default initRecherche;
