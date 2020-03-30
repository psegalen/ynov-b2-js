import React from "react";
import { withRouter } from "react-router-dom";
import ApiHelper from "../helpers/ApiHelper";
import "./Media.css";
import MediaHeader from "../components/MediaHeader";
import MediaHelper from "../helpers/MediaHelper";
import MediaInfos from "../components/MediaInfos";

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      media: null,
      photos: [],
      currentMediaId: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    if (
      this.state.currentMediaId &&
      this.state.currentMediaId !== this.props.match.params.id
    ) {
      this.getData();
    }
  }

  getData() {
    const { id } = this.props.match.params;
    this.setState({ currentMediaId: id, isLoading: true });
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
          .slice(1, 4)
          .map(photo => MediaHelper.imageUrl(photo.file_path))
      })
    );
  }

  render() {
    if (this.state.isLoading) return <div>Chargement ...</div>;
    if (!this.state.media) return <div>Média introuvable !</div>;

    return (
      <div>
        <MediaHeader
          media={this.state.media}
          type={this.props.type}
        />
        <div className="photos">
          {this.state.photos.map(photoUrl => (
            <img src={photoUrl} alt={photoUrl} />
          ))}
        </div>
        <MediaInfos media={this.state.media} type={this.props.type} />
      </div>
    );
  }
}

export default withRouter(Media);
