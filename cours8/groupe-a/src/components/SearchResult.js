import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./FavoritesContext";
import "./SearchResult.css";
import MediaHelper from "../helpers/MediaHelper";

const SearchResult = (props) => {
  const { favs } = useContext(FavoritesContext);
  const mediaKey = `${props.data.media_type}_${props.data.id}`;

  const date =
    props.data.media_type === "movie"
      ? props.data.release_date
      : props.data.first_air_date;

  return (
    <Link
      to={`/${props.data.media_type === "movie" ? "film" : "serie"}/${
        props.data.id
      }`}
    >
      <div className="resultat">
        <img
          className="resultat-poster"
          style={{ height: "200px" }}
          src={MediaHelper.posterUrl(props.data.poster_path)}
          alt={
            props.data.media_type === "movie"
              ? props.data.title
              : props.data.name
          }
        />
        <div className="resultat-infos">
          <div className="resultat-titre">
            {props.data.media_type === "movie"
              ? props.data.title
              : props.data.name}
          </div>
          <div className="resultat-type">
            {props.data.media_type === "movie" ? "Film" : "Série"}
          </div>
          <div className="resultat-annee">
            {date && date.split("-")[0]}
          </div>
          <div className="resultat-fav">
            {favs.findIndex(
              (media) => media.mediaKey === mediaKey
            ) === -1
              ? ""
              : "Favori !"}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
