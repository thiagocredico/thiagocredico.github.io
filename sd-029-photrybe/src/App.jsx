import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Admin, Favorites, Home, Login } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/admin" component={ Admin } />
      </Switch>
    );
  }
}

export default App;
