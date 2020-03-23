import React from "react";
import "./SearchResult.css";
import MediaHelper from "../helpers/MediaHelper";

const SearchResult = props => {
  const date =
    props.data.media_type === "movie"
      ? props.data.release_date
      : props.data.first_air_date;
  const year = date.split("-")[0];
  return (
    <a>
      <div className="resultat">
        <img
          className="resultat-poster"
          style={{ height: "200px" }}
          src={MediaHelper.posterUrl(props.data.poster_path)}
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
          <div className="resultat-annee">{year || ""}</div>
        </div>
      </div>
    </a>
  );
};

export default SearchResult;
