import React from "react";
import MediaHelper from "../helpers/MediaHelper";

const MediaHeader = props => {
  const nomMedia =
    props.type === "movie" ? props.media.title : props.media.name;
  const anneeMedia =
    props.type === "movie"
      ? props.media.release_date.split("-")[0]
      : props.media.first_air_date.split("-")[0];
  return (
    <div
      id="backdrop"
      style={{
        backgroundImage: `url(${MediaHelper.backdropUrl(
          props.media.backdrop_path
        )})`
      }}
    >
      <div className="media-infos">
        <img
          src={MediaHelper.posterUrl(props.media.poster_path)}
          id="poster"
          alt="Poster du média"
        />
        <div className="nomAnneeGenre">
          <div id="nom">{nomMedia}</div>
          <div className="anneeGenre">
            <span id="annee">{anneeMedia}</span> -{" "}
            <span id="genre">
              {props.media.genres.map(item => item.name).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaHeader;
