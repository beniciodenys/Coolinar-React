import React, { Component } from "react";
import RecipeLink from './RecipeLink'

class RecipeLinks__Row extends Component {
  render() {
    return (
        <div className="recipe-links-row centered">
        <RecipeLink />
        <RecipeLink />
        <RecipeLink />
      </div>
    );
  }
}

export default RecipeLinks__Row;
