import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
      // <h1>Exercise - Frontend content</h1>
    );
  }
}

export default App;
