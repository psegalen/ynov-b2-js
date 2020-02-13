import { apiKey } from "./Helpers.js";
import Serie from "./Classes/Serie.js";
import Film from "./Classes/Film.js";

const traiterMedia = (data, type) => {
  const media = type == "movie" ? new Film(data) : new Serie(data);
  media.remplir();
};

const initMedia = (type, id) => {
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

export default initMedia;
