import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ApiHelper from "../helpers/ApiHelper";
import SearchResult from "../components/SearchResult";
import "./Search.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (props.match.params.query) {
      setIsLoading(true);
      setSearchText(props.match.params.query);
      ApiHelper.search(props.match.params.query)
        .then((response) => {
          setResults(response.data.results);
          setIsLoading(false);
        })
        .catch((error) => alert(error.message));
    } else {
      setSearchText("");
      setResults([]);
    }
  }, [props.match.params.query]);

  const search = () => props.history.push(`/search/${searchText}`);

  return (
    <div>
      <div>
        <span>Recherche</span>
        <input
          type="text"
          style={{ marginLeft: "16px", marginRight: "16px" }}
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
        <button onClick={search}>Rechercher</button>
      </div>
      <div className="resultats">
        {isLoading
          ? "Chargement ..."
          : results.length === 0 && props.match.params.query
          ? "Pas de résultat !"
          : results.map((result) => (
              <SearchResult
                data={result}
                key={`${result.media_type}_${result.id}`}
              />
            ))}
      </div>
    </div>
  );
};

export default withRouter(Search);
