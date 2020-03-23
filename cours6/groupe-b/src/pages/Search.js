import React from "react";
import ApiHelper from "../helpers/ApiHelper";
import SearchResult from "../components/SearchResult";
import "./Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      oneSearchDone: false,
      results: [],
      searchText: ""
    };
  }

  search() {
    this.setState({ isLoading: true });
    ApiHelper.search(this.state.searchText)
      .then(response =>
        this.setState({
          results: response.data.results,
          isLoading: false,
          oneSearchDone: true
        })
      )
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <div>
          <span>Recherche</span>
          <input
            type="text"
            style={{ marginLeft: "16px", marginRight: "16px" }}
            value={this.state.searchText}
            onChange={evt =>
              this.setState({ searchText: evt.target.value })
            }
          />
          <button onClick={() => this.search()}>Rechercher</button>
        </div>
        <div className="resultats">
          {this.state.isLoading
            ? "Chargement ..."
            : this.state.results.length === 0 &&
              this.state.oneSearchDone
            ? "Pas de résultat !"
            : this.state.results.map(result => (
                <SearchResult data={result} />
              ))}
        </div>
      </div>
    );
  }
}
