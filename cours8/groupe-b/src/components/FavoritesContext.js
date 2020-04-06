import React, { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favs: [],
  setFavs: () => {},
});

export const FavoritesProvider = (props) => {
  const initialFavs = localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs"))
    : [];

  const [favs, setFavs] = useState(initialFavs);

  const finalSetFavs = (newFavs) => {
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFavs(newFavs);
  };

  return (
    <FavoritesContext.Provider
      value={{ favs, setFavs: finalSetFavs }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
