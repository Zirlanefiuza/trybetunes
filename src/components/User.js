import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <div data-testid="header-user-name">{ name }</div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
