import React from "react";
import Axios from "axios";

import "../App.css";

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.className]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    Axios.post("/api/users/login", {
      email,
      password
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="SignIn">
        <h3> Hola como estas? es bueno verte de nuevo! </h3>
        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <input
            className="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            className="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button className="buttonLogIn">Ingresar</button>
        </form>
      </div>
    );
  }
}
