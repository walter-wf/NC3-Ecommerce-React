import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import withContext from '../withContext';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, error: '' });

  NewUser = e => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: ' Completa  datos ' });
    }
    this.props.context.login(username, password).then(loggedIn => {
      if (!loggedIn) {
        this.setState({ error: 'Usuario Invalido' });
      }
    });
  };

  render() {
    return !this.props.context.user ? (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Usuario nuevo</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.login}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Nombre </label>
                <input
                  className="input"
                  type=""
                  name=""
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Apellido </label>
                <input
                  className="input"
                  type=""
                  name=""
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Direccion </label>
                <input
                  className="input"
                  type=""
                  name=""
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Pais </label>
                <input
                  className="input"
                  type=""
                  name=""
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button className="button is-primary is-outlined is-pulled-right">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      <Redirect to="/products" />
    );
  }
}

export default withContext(NewUser);
