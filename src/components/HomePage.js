import React from "react";
import Footer from "./Footer";

import "../App.css";
class Homepage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <img src="/images/ecuteachers.jpg" width="100%" alt="Not found" />
        </header>
        <nav id="menu">
          <div>
            <a href="">Resources</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </nav>
        <article className="article">
          <h1>Who we are?</h1>
          <p>Ecu teachers is a teachers community </p>
          <br />
          <p>We are...................................</p>
          <br />
          <p>We are...................................</p>
        </article>
        <Footer />
      </div>
    );
  }
}
export default Homepage;
