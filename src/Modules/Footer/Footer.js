import React, { Component } from "react";
import footerLogo from "../../images/footer-logo.jpg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container centered">
        <img src={footerLogo} alt="" class="footer-logo" />
        <p className="footer-copyright"> COOLinar | Adaptive</p>
      </footer>
    );
  }
}

export default Footer;
