import axios from "axios";

const apiKey = "97719463bea4bd4b5902c1a735c0556a";

const ApiHelper = {
  search: searchText => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fr-FR&query=${searchText}`;
    return axios.get(url);
  }
};

export default ApiHelper;
