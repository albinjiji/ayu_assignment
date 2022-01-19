import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div className="container">
      <div className="search">
        <input
          className="input"
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Type to search..."
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;
