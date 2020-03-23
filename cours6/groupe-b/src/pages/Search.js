import React from "react";
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
      .then(response =>
        this.setState({ results: response.data.results })
      )
      .catch(error => alert(error.message));
  }

  render() {
    return (
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
    );
  }
}
