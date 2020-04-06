import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext({
  favs: [],
  setFavs: () => {},
});

export const FavoritesProvider = (props) => {
  const [favs, setFavs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      const localFavs = localStorage.getItem("favs")
        ? JSON.parse(localStorage.getItem("favs"))
        : [];
      setFavs(localFavs);
      setIsMounted(true);
    }
  }, [isMounted]);

  const finalSetFavs = (newFavs) => {
    setFavs(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };

  return (
    <FavoritesContext.Provider
      value={{ favs, setFavs: finalSetFavs }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
