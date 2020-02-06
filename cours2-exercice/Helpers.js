const Helpers = {
  getParam: name => {
    const params = new URLSearchParams(document.location.search);
    return params.get(name);
  },
  id: id => document.getElementById(id),
  remplirChamp: (id, text) => {
    document.getElementById(id).innerText = text;
  },
  backdropUrl: suffix => `https://image.tmdb.org/t/p/w1280${suffix}`,
  posterUrl: suffix => `https://image.tmdb.org/t/p/w154${suffix}`
};

export default Helpers;
