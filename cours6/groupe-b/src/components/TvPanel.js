import React from "react";

const TvPanel = props => {
  const nbSeasons = props.media.seasons.length;
  return (
    <div>
      <div>Infos à propos de la série :</div>
      <div>
        <span>{nbSeasons}</span> saison{nbSeasons > 1 ? "s" : ""}
      </div>
      <ul>
        {props.media.seasons.map(season => (
          <li>
            {season.name} : {season.episode_count} épisode
            {season.episode_count > 1 ? "s" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TvPanel;
