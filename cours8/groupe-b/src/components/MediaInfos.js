import React, { useState, useEffect } from "react";
import numeral from "numeral";
import ApiHelper from "../helpers/ApiHelper";
import MoviePanel from "./MoviePanel";
import TvPanel from "./TvPanel";
import { Link } from "react-router-dom";

const MediaInfos = (props) => {
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    ApiHelper.getSimilars(
      props.type,
      props.media.id
    ).then((response) => setSimilars(response.data.results));
  }, [props.type, props.media.id]);

  return (
    <div className="infos">
      <div className="communes">
        <div>Synopsis : {props.media.overview}</div>
        <div>
          Note :{" "}
          <span
            style={{
              color:
                props.media.vote_average >= 7
                  ? "rgb(0, 255, 0)"
                  : props.media.vote_average < 5
                  ? "rgb(255, 0, 0)"
                  : undefined,
            }}
          >
            {props.media.vote_average}
          </span>{" "}
          (
          <span>
            {numeral(props.media.vote_count).format("0,0 a")}
          </span>{" "}
          votes)
        </div>
        <div>
          Médias similaires :
          <ul className="similars">
            {similars.map((media) => (
              <li key={`${media.id}`}>
                <Link
                  to={`/${
                    props.type === "movie" ? "film" : "serie"
                  }/${media.id}`}
                >
                  {props.type === "movie" ? media.title : media.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id={props.type}>
        {props.type === "movie" ? (
          <MoviePanel media={props.media} />
        ) : (
          <TvPanel media={props.media} />
        )}
      </div>
    </div>
  );
};

export default MediaInfos;
