import React, { useContext } from "react";
import MediaHelper from "../helpers/MediaHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "./FavoritesContext";

const MediaHeader = (props) => {
  const { favs, setFavs } = useContext(FavoritesContext);
  const mediaKey = `${props.type}_${props.media.id}`;

  const toggleFav = () => {
    const favIndex = favs.indexOf(mediaKey);
    if (favIndex === -1) setFavs([...favs, mediaKey]);
    else
      setFavs(
        favs.slice(0, favIndex).concat(favs.slice(favIndex + 1))
      );
  };

  const annee =
    props.type === "movie"
      ? props.media.release_date.split("-")[0]
      : props.media.first_air_date.split("-")[0];

  return (
    <div
      id="backdrop"
      style={{
        backgroundImage: `url(${MediaHelper.backdropUrl(
          props.media.backdrop_path
        )})`,
      }}
    >
      <div className="media-infos">
        <img
          src={MediaHelper.posterUrl(props.media.poster_path)}
          id="poster"
          alt="Poster"
        />
        <div className="nomAnneeGenre">
          <div id="nom">
            {props.type === "movie"
              ? props.media.title
              : props.media.name}
          </div>
          <div className="anneeGenre">
            <span id="annee">{annee}</span> -{" "}
            <span id="genre">
              {props.media.genres
                .map((genre) => genre.name)
                .join(", ")}
            </span>
          </div>
        </div>
      </div>
      <span className="favoriteButton" onClick={toggleFav}>
        <FontAwesomeIcon
          icon={faStar}
          size="2x"
          color={
            favs.indexOf(mediaKey) === -1 ? "black" : "goldenrod"
          }
        />
      </span>
    </div>
  );
};

export default MediaHeader;
