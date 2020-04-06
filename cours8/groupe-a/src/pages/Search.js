import React from "react";
import { withRouter } from "react-router-dom";
import ApiHelper from "../helpers/ApiHelper";
import SearchResult from "../components/SearchResult";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      oneSearchDone: false,
      results: [],
      searchText: "",
      previousQuery: ""
    };
  }

  componentDidMount() {
    const { query } = this.props.match.params;
    if (query) {
      this.setState({ searchText: query, previousQuery: query });
      this.doSearchRequest(query);
    }
  }

  componentDidUpdate() {
    const { query } = this.props.match.params;
    if (query && query !== this.state.previousQuery) {
      this.setState({ searchText: query, previousQuery: query });
      this.doSearchRequest(query);
    }
  }

  doSearchRequest(query) {
    this.setState({ isLoading: true });
    ApiHelper.search(query)
      .then(response =>
        this.setState({
          results: response.data.results,
          isLoading: false,
          oneSearchDone: true
        })
      )
      .catch(error => alert(error.message));
  }

  search() {
    this.props.history.push(`/search/${this.state.searchText}`);
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
                <SearchResult
                  data={result}
                  key={`${result.media_type}_${result.id}`}
                />
              ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
