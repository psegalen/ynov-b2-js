import Helpers from "../Helpers.js";

export default class Media {
  constructor(data) {
    this.data = data;
  }

  remplir() {
    Helpers.remplirChamp("description", this.data.overview);
    Helpers.id("backdrop").style.backgroundImage = `url(${Helpers.backdropUrl(
      this.data.backdrop_path
    )})`;
    Helpers.id("poster").src = Helpers.posterUrl(this.data.poster_path);
    Helpers.remplirChamp(
      "genre",
      this.data.genres.map(item => item.name).join(", ")
    );
    Helpers.remplirChamp("moyenne", this.data.vote_average);
    Helpers.remplirChamp(
      "nbVotes",
      numeral(this.data.vote_count).format("0,0 a")
    );
  }

  cacherPanneau(id) {
    Helpers.id(id).style.display = "none";
  }

  remplirAnnee(date) {
    Helpers.remplirChamp("annee", date.split("-")[0]);
  }
}
