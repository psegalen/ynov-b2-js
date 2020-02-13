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

const Helpers = {
  getParam: name => {
    const params = new URLSearchParams(document.location.search);
    return params.get(name);
  },
  id: id => document.getElementById(id),
  remplirChamp: (id, text) => {
    document.getElementById(id).innerText = text;
  },
  getAnnee: date => (date ? date.split("-")[0] : ""),
  backdropUrl: suffix =>
    suffix
      ? `https://image.tmdb.org/t/p/w1280${suffix}`
      : "https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png",
  posterUrl: suffix =>
    suffix
      ? `https://image.tmdb.org/t/p/w154${suffix}`
      : "https://www.flixdetective.com/web/images/poster-placeholder.png",
  creerChamp: (parent, text, className) => {
    const champ = document.createElement("span");
    champ.className = className;
    champ.innerText = text;
    parent.appendChild(champ);
  }
};

export const apiKey = "97719463bea4bd4b5902c1a735c0556a";

export default Helpers;
