import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  state = {
    user: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({
        user,
        loading: false,
      });
    });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div>
        <div data-testid="page-profile" />
        <Header />
        {loading ? <Loading /> : (
          <>
            <img
              src={ user.image }
              alt={ user.name }
              data-testid="profile-image"
            />
            <h2>Nome</h2>
            <p>{user.name}</p>
            <h2>Email</h2>
            <p>{user.email}</p>
            <h2>Descrição</h2>
            <p>{user.description}</p>
            <Link to="/profile/edit">Editar perfil</Link>
          </>
        )}
      </div>

    );
  }
}

export default Profile;
