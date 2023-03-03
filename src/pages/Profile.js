import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="page-profile" />
        <Header />
      </div>

    );
  }
}

export default Profile;
