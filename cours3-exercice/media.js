import Helpers from "./Helpers.js";
import Serie from "./Classes/Serie.js";
import Film from "./Classes/Film.js";

// load a locale
numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ","
  },
  abbreviations: {
    thousand: "K",
    million: "M",
    billion: "MM",
    trillion: "MMM"
  },
  ordinal: function(number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "€"
  }
});

// switch between locales
numeral.locale("fr");

export const apiKey = "97719463bea4bd4b5902c1a735c0556a";

const traiterMedia = (data, type) => {
  const media = type == "movie" ? new Film(data) : new Serie(data);
  media.remplir();
};

const chargerMedia = (type, id) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=fr-FR`;
  axios
    .get(url)
    .then(response => traiterMedia(response.data, type))
    .catch(error => {
      if (error.response && error.response.status == 404) {
        alert("Média introuvable !");
      } else {
        console.error(error);
      }
    });
};

export default chargerMedia;
