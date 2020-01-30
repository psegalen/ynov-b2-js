const axios = require("axios");

const traiterResultat = resultat => {
  const { title, artist, album, duration } = resultat;
  const nbMinutes = Math.floor(duration / 60)
    .toString()
    .padStart(2, "0");
  const nbSecondes = (duration % 60).toString().padStart(2, "0");
  console.log(
    `Titre : ${title}, Artiste : ${artist.name}, Album : ${album.title}, Durée : ${nbMinutes} mn ${nbSecondes} s`
  );
};

axios
  .get(`https://api.deezer.com/search?q=${process.argv[2]}`)
  .then(result => {
    const { data: resultatsDeezer } = result.data;
    let nbResultatTraites = 0;
    for (let i = 0; i < resultatsDeezer.length; i++) {
      const element = resultatsDeezer[i];
      if (element.type !== "track") {
        continue;
      } else {
        traiterResultat(element);
        nbResultatTraites++;
        if (nbResultatTraites >= 10) break;
      }
    }
    if (nbResultatTraites === 0) {
      console.log("Pas de résultat !");
    }
  })
  .catch(error => console.error(error));
