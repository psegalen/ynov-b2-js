import React from "react";

const SearchResult = props => (
  <div>
    {props.data.media_type === "movie" ? props.data.title : props.data.name}
  </div>
);

export default SearchResult;
