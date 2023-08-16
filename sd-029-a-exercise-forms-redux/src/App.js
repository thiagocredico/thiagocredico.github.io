import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDisplay from './pages/FormDisplay';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/personal-form" component={ PersonalForm } />
          <Route exact path="/professional-form" component={ ProfessionalForm } />
          <Route exact path="/form-display" component={ FormDisplay } />
        </Switch>
      </main>
    );
  }
}

export default App;
