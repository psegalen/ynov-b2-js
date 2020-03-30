import React from "react";
import ApiHelper from "../helpers/ApiHelper";
import MoviePanel from "./MoviePanel";
import TvPanel from "./TvPanel";
import { Link } from "react-router-dom";

class MediaInfos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similars: [],
      isLoading: true
    };
  }

  componentDidMount() {
    ApiHelper.getSimilars(this.props.type, this.props.media.id).then(
      response =>
        this.setState({
          similars: response.data.results,
          isLoading: false
        })
    );
  }

  render() {
    return (
      <div className="infos">
        <div className="communes">
          <div>Synopsis : {this.props.media.overview}</div>
          <div>
            Note : <span>Moyenne</span> (<span>Nb</span> votes)
          </div>
          <div>
            Médias similaires :
            <ul className="similars">
              {this.state.similars.map(media => (
                <li>
                  <Link
                    to={`/${
                      this.props.type === "movie" ? "film" : "serie"
                    }/${media.id}`}
                  >
                    {this.props.type === "movie"
                      ? media.title
                      : media.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id={this.props.type}>
          {this.props.type === "movie" ? <MoviePanel /> : <TvPanel />}
        </div>
      </div>
    );
  }
}

export default MediaInfos;
