import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import ApiHelper from "../helpers/ApiHelper";
import "./Media.css";
import MediaHeader from "../components/MediaHeader";
import MediaHelper from "../helpers/MediaHelper";
import MediaInfos from "../components/MediaInfos";

const Media = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [media, setMedia] = useState(null);
  const [photos, setPhotos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    ApiHelper.getMedia(props.type, id)
      .then((response) => {
        document.title =
          props.type === "movie"
            ? `Film : ${response.data.title}`
            : `Série : ${response.data.name}`;
        setMedia(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
    ApiHelper.getPhotos(props.type, id).then((response) =>
      setPhotos(
        response.data.backdrops
          .slice(1, 4)
          .map((photo) => MediaHelper.imageUrl(photo.file_path))
      )
    );
  }, [props.type, id]);

  if (isLoading) return <div>Chargement ...</div>;
  if (!media) return <div>Média introuvable !</div>;

  return (
    <div>
      <MediaHeader media={media} type={props.type} />
      <div className="photos">
        {photos.map((photoUrl) => (
          <img src={photoUrl} alt={photoUrl} key={photoUrl} />
        ))}
      </div>
      <MediaInfos media={media} type={props.type} />
    </div>
  );
};

export default withRouter(Media);
