import React from "react";
import numeral from "numeral";

const MoviePanel = props => {
  const nbHeures = Math.floor(props.media.runtime / 60);
  const nbMinutes = props.media.runtime % 60;
  return (
    <div>
      <div>Infos à propos du film :</div>
      <div>
        Durée :{" "}
        <span>
          {nbHeures} h {nbMinutes.toString().padStart(2, "0")} mn
        </span>
      </div>
      {props.media.budget === 0 || props.media.revenue === 0 ? (
        undefined
      ) : (
        <div>
          <div>
            Budget :{" "}
            <span>
              {numeral(props.media.budget / 1.1).format("0,0 a $")}
            </span>{" "}
            / Revenus :{" "}
            <span>
              {numeral(props.media.revenue / 1.1).format("0,0 a $")}
            </span>
          </div>
          <div>
            {props.media.budget > props.media.revenue
              ? "Oh le mauvais plan !"
              : "Bonne rentabilité !"}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePanel;
