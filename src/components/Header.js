import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header data-testid="hdeaer-component">

        <h1 data-testid="header-user-name">
          Bem Vindo!
        </h1>
      </header>

    );
  }
}

export default Header;
