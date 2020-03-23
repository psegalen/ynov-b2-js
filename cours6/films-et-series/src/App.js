import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Media from "./pages/Media";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/serie/:mediaId">
            <Media type="serie" />
          </Route>
          <Route path="/film/:mediaId">
            <Media type="film" />
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
