import React from "react";
import Axios from "axios";

import "../App.css";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.className]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    Axios.post("/api/users/signup", {
      username,
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
    const { username, email, password } = this.state;
    return (
      <div className="SignUp">
        <h2> Bienvenido a CarStore, registrate porfavor: </h2>
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            className="username"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={this.handleChange}
          />
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
          <button type="submit" className="buttonSignup">
            Registrar
          </button>
        </form>
      </div>
    );
  }
}
