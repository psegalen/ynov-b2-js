import React, { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import SearchResult from "../components/SearchResult";

const Favorites = () => {
  const { favs } = useContext(FavoritesContext);
  return (
    <div>
      Favoris :
      <div className="resultats">
        {favs.length > 0
          ? favs.map((fav) => (
              <SearchResult data={fav} key={fav.mediaKey} />
            ))
          : "Pas de favoris"}
      </div>
    </div>
  );
};

export default Favorites;
