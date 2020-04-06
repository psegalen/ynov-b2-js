import React, { useContext, useEffect } from "react";
import { FavoritesContext } from "../components/FavoritesContext";
import SearchResult from "../components/SearchResult";

const Favorites = () => {
  const { favs } = useContext(FavoritesContext);
  useEffect(() => {
    document.title = "Favoris";
  }, [favs]);
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
