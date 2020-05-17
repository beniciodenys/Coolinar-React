import React, { Component } from "react";
import RecipeLink__Row from "./Recipe Links/RecipeLinks__Row";
import LinkImg from "../../images/main-food-pic.jpg";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <RecipeLink__Row />
      </div>
    );
  }
}

export default Body;
