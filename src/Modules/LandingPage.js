import React, { Component } from "react";
import LandingPageImg from "../images/main-food-pic.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        {/*<img src={LandingPageImg} alt="LandPage" className="landing-page-img" />*/}
          <div className="landing-page-recipe">
            <a className="landing-page-recipe-btn" href="#">
              <p>Рецепт дня</p>
            </a>
              <h1>Кремовый пирог "Ромашка"</h1>
              <p>
                "Ромашка" часто выручает меня, когда возникают неожиданные
                гости)
              </p>
              <h1>Александра Серая</h1>
          </div>
        </div>
    );
  }
}

export default LandingPage;
