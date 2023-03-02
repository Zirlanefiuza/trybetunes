import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { loading } = this.state;
    const {
      inputName,
      handleChange,
      history,
    } = this.props;

    console.log(this.props);
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
            name="inputName"
            value={ inputName }
            onChange={ handleChange }
          />
        </label>

        <button
          data-testid="login-submit-button"
          id="loginButton"
          type="button"
          disabled={ inputName.length < disabledLength }
          onClick={ async () => {
            this.setState({ loading: true });
            await createUser({
              name: inputName,
            });
            history.push('/search');
          } }
        >
          Entrar
        </button>
      </div>

    );
  }
}

Login.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,

};

export default Login;
