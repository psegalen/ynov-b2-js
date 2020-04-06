import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import numeral from "numeral";
import "./App.css";
import Search from "./pages/Search";
import Media from "./pages/Media";
import { FavoritesProvider } from "./components/FavoritesContext";
import Favorites from "./pages/Favorites";

// load a locale
numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ",",
  },
  abbreviations: {
    thousand: "K",
    million: "M",
    billion: "MM",
    trillion: "MMM",
  },
  ordinal: function (number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "€",
  },
});

// switch between locales
numeral.locale("fr");

function App() {
  return (
    <FavoritesProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/serie/:id">
              <Media type="tv" />
            </Route>
            <Route path="/film/:id">
              <Media type="movie" />
            </Route>
            <Route path="/search/:query">
              <Search />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Router>
      </div>
    </FavoritesProvider>
  );
}

export default App;
