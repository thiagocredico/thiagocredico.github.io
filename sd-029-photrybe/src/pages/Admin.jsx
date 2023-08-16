import React, { Component } from 'react';
import Menu from '../components/Menu';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Menu />
        Admin
        <img
          src="https://i.pinimg.com/originals/f6/87/23/f68723e1729c255bcf8b5febc406b5ee.jpg"
          alt="elmo"
        />
      </div>
    );
  }
}
