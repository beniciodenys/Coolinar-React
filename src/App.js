import React from "react";
import "./css/media.css";
import Header from "./Modules/Header/Header";
import LandingPage from "./Modules/LandingPage";
import Body from "./Modules/Body/Body";
import ContactForm from "./Modules/ContactForm";
import Footer from "./Modules/Footer/Footer";

function App() {
  return (
    <div className="main-container">
      <Header />
      <LandingPage />
      <div className="body-container">
        <Body />
        <ContactForm />
      </div>
        <Footer />
    </div>
  );
}

export default App;
