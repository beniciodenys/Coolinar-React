import React, { Component } from "react";
import LinkImg from "../../../images/main-food-pic.jpg";

class RecipeLink extends Component {
  render() {
    return (
      <div className="recipe-link">
        <div className="recipe-link__marker">Полезно</div>
        <img src={LinkImg} className="recipe-link__img" />
        <div className="recipe-link__desc">
            scsdcddddddddddddddddddddddddddd
        </div>
      </div>
    );
  }
}

export default RecipeLink;
