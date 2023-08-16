import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  state = {
    isActive: false,
  };

  render() {
    const { isActive } = this.state;

    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/home">
            <i className="navbar-item fa-solid fa-camera is-medium">Tryphoto</i>
          </Link>

          <button
            className={ `navbar-burger burger ${isActive ? 'is-active' : ''}` }
            onClick={ () => this.setState({ isActive: !isActive }) }
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div
          className={ `navbar-menu burger ${isActive ? 'is-active' : ''}` }
        >
          <div className="navbar-start">
            <Link className="navbar-item has-text-primary-dark" to="/home">Home</Link>
            <Link
              className="navbar-item has-text-primary-dark"
              to="/favorites"
            >
              Favoritos
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-danger" to="/">Sair</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
