import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = props => (
  <div className="resultats">
    {props.results.map(result => (
      <SearchResult data={result} key={`${result.media_type}_${result.id}`} />
    ))}
  </div>
);

export default SearchResultsList;
