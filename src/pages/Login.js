import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  state = {
    loading: false,
    name: '',
  };

  handleChange = ({ target: { name, type, checked, value } }) => {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  onClickButton = async () => {
    const { name } = this.state;
    const { history: { push } } = this.props;
    this.setState({
      loading: true,
    });
    await createUser({ name });
    this.setState({
      loading: false,
    }, () => push('/search'));
  };

  render() {
    const { loading, name } = this.state;

    const disabledLength = 3;
    if (loading) return <Loading />;
    return (

      <div data-testid="page-login">
        <label htmlFor="inputName">
          Nome
          <input
            data-testid="login-name-input"
            id="inputName"
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>

        <button
          data-testid="login-submit-button"
          id="loginButton"
          type="button"
          disabled={ name.length < disabledLength }
          onClick={ this.onClickButton }
        >
          Entrar
        </button>
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,

};

export default Login;
