import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <i className="search-btn fas fa-search icon-2x"></i>
        <input
          className="search-input"
          type="search"
          required
          minlength="4"
          maxlength="30"
          size="10"
          placeholder="Что вы хотите приготовить?"
          name="search"
        />
      </div>
    );
  }
}

export default Search;