import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import numeral from "numeral";
import "./App.css";
import Search from "./pages/Search";
import Media from "./pages/Media";

// load a locale
numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ","
  },
  abbreviations: {
    thousand: "K",
    million: "M",
    billion: "MM",
    trillion: "MMM"
  },
  ordinal: function(number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "€"
  }
});

// switch between locales
numeral.locale("fr");

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
  );
}

export default App;
