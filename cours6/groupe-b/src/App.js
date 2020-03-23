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
      <Router>
        <Switch>
          <Route path="/serie/:id">
            <Media type="tv" />
          </Route>
          <Route path="/film/:id">
            <Media type="movie" />
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
