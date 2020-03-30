import React from "react";
import { withRouter } from "react-router-dom";
import ApiHelper from "../helpers/ApiHelper";
import "./Media.css";
import MediaHelper from "../helpers/MediaHelper";
import Mediaheader from "../components/MediaHeader";
import MediaInfos from "../components/MediaInfos";

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      media: null,
      photos: [],
      isLoading: true,
      similarMedias: [],
      currentId: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    if (
      this.state.currentId &&
      this.state.currentId !== this.props.match.params.mediaId
    ) {
      this.getData();
    }
  }

  getData() {
    const id = this.props.match.params.mediaId;
    this.setState({
      isLoading: true,
      currentId: id,
      similarMedias: [],
      photos: []
    });
    ApiHelper.getMedia(this.props.type, id)
      .then(response =>
        this.setState({ media: response.data, isLoading: false })
      )
      .catch(error => {
        this.setState({ isLoading: false });
        console.error(error);
      });
    ApiHelper.getPhotos(this.props.type, id).then(response =>
      this.setState({
        photos: response.data.backdrops
          .slice(0, 3)
          .map(photo => MediaHelper.imageUrl(photo.file_path))
      })
    );
    ApiHelper.getSimilarMedias(this.props.type, id).then(response =>
      this.setState({
        similarMedias: response.data.results.map(media => ({
          id: media.id,
          title:
            this.props.type === "movie" ? media.title : media.name
        }))
      })
    );
  }

  render() {
    if (this.state.isLoading) return <div>Chargement ...</div>;
    if (!this.state.media) return <div>Média introuvable</div>;

    return (
      <div>
        <Mediaheader
          media={this.state.media}
          type={this.props.type}
        />
        <div className="photos">
          {this.state.photos.map(photoUrl => (
            <img src={photoUrl} alt={photoUrl} key={photoUrl} />
          ))}
        </div>
        <MediaInfos
          media={this.state.media}
          type={this.props.type}
          similarMedias={this.state.similarMedias}
        />
      </div>
    );
  }
}

export default withRouter(Media);
