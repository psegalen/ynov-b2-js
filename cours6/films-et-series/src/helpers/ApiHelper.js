import axios from "axios";

const apiKey = "97719463bea4bd4b5902c1a735c0556a";

const ApiHelper = {
  search: searchText => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fr-FR&query=${searchText}`;
    return axios.get(url);
  },
  getMedia: (type, id) => {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=fr-FR`;
    return axios.get(url);
  },
  getPhotos: (type, id) => {
    const imagesUrl = `https://api.themoviedb.org/3/${type}/${id}/images?api_key=${apiKey}`;
    return axios.get(imagesUrl);
  },
  getSimilarMedias: (type, id) => {
    const similarUrl = `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${apiKey}&language=fr-FR`;
    return axios.get(similarUrl);
  }
};

export default ApiHelper;
