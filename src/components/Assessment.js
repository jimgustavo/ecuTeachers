import React from "react";

import "../App.css";
class Assessment extends React.Component {
  render() {
    return (
      <div className="containerAssessment">
        <div className="reading">
          <a href="">Reading Section</a>
          <br />
          <a href="/Test">Identities</a>
          <br />
          <a href="">Experiences</a>
          <br />
          <a href="">Human Ingenuity</a>
          <br />
          <a href="">Otra</a>
        </div>
        <div className="writing">
          <a href="">Writing Section</a>
        </div>
        <div className="listening">
          <a href="">Listening Section</a>
        </div>
        <div className="speaking">
          <a href="">Speaking Section</a>
        </div>
      </div>
    );
  }
}
export default Assessment;
