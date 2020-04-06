import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import SearchResult from "../components/SearchResult";

const Favorites = () => {
  const { favs } = useContext(FavoritesContext);
  return (
    <div>
      <div>Favoris :</div>
      <div className="resultats">
        {favs.map((fav) => (
          <SearchResult data={fav} key={fav.mediaKey} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
