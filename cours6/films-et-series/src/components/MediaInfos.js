import React from "react";
import { Link } from "react-router-dom";

const MediaInfos = props => (
  <div className="infos">
    <div className="communes">
      <div className="description">
        Synopsis : {props.media.overview}
      </div>
      <div>
        Médias similaires :
        <div id="similaires">
          <ul>
            {props.similarMedias.map(media => (
              <li key={`${media.id}`}>
                <Link
                  to={`/${
                    props.type === "movie" ? "film" : "serie"
                  }/${media.id}`}
                >
                  {media.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MediaInfos;
