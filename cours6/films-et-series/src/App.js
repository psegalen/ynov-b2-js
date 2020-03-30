import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Media from "./pages/Media";

function App() {
  return (
    <div className="App">
      <div className="racine">
        <Router>
          <Switch>
            <Route path="/serie/:mediaId">
              <Media type="tv" />
            </Route>
            <Route path="/film/:mediaId">
              <Media type="movie" />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
