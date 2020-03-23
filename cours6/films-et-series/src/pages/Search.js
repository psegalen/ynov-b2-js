import React from "react";
import "./Search.css";
import SearchResultsList from "../components/SearchResultsList";
import ApiHelper from "../helpers/ApiHelper";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      searchText: ""
    };
  }

  search() {
    ApiHelper.search(this.state.searchText)
      .then(response => this.setState({ results: response.data.results }))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <div className="search-controls">
          <span>Recherche</span>
          <input
            type="text"
            style={{ marginLeft: "16px", marginRight: "16px" }}
            value={this.state.searchText}
            onChange={evt => this.setState({ searchText: evt.target.value })}
          />
          <button onClick={() => this.search()}>Chercher</button>
        </div>
        <div className="search-nb-results">? résultat(s)</div>
        {this.state.isLoading ? (
          <div className="loading">Chargement ...</div>
        ) : (
          <div className="search-results">
            <SearchResultsList results={this.state.results} />
          </div>
        )}
      </div>
    );
  }
}
