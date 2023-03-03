import React from 'react';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="page-favorites" />
        <Header />
      </div>

    );
  }
}

export default Favorites;
