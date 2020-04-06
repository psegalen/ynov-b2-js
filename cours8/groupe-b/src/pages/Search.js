import React, { useState, useEffect } from "react";
import { withRouter, useParams, useHistory } from "react-router-dom";
import ApiHelper from "../helpers/ApiHelper";
import SearchResult from "../components/SearchResult";
import "./Search.css";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { query } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setSearchText(query);
      ApiHelper.search(query)
        .then((response) => {
          setIsLoading(false);
          setResults(response.data.results);
        })
        .catch((error) => alert(error.message));
    } else {
      setSearchText("");
      setResults([]);
    }
  }, [query]);

  const search = () => history.push(`/search/${searchText}`);

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
          : results.length === 0 && query
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
