import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favs: [],
  setFavs: () => {},
});

export const FavoritesProvider = (props) => {
  const [favs, setFavs] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favs, setFavs }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
