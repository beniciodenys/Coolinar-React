import React, { Component } from "react";
import MenuBar from "./MenuBar";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSocialMedia from "./HeaderSocialMedia";
import Search from './Search';

import mainLogo from "../../images/mainLogo.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="menu-bar">
          <i className="menu-bar-icon fas fa-bars"></i>
        </div>
        <a href="#">
          <img src={mainLogo} alt="Log" className="main-logo" />
        </a>
        <HeaderNavigation />
        {/*<HeaderSocialMedia /> */}
        <Search />
      </header>
    );
  }
}

export default Header;
