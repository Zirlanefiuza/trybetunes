import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/ Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

class App extends React.Component {
  state = {
    name: '',

  };

  render() {
    const { name } = this.state;
    return (

      <div>
        <p>TrybeTunes</p>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Login
              inputName={ name }
              handleChange={ this.handleChange }
              { ...props }
            />) }
          />

          <Route path="/search" component={ Search } />

          <Route path="/album/:id" component={ Album } />

          <Route path="/favorites" component={ Favorites } />

          <Route path="/profile" component={ Profile } />

          <Route path="/profile/edit" component={ ProfileEdit } />

          <Route component={ NotFound } />

          <Route exact path="/header" component={ Header } />
        </Switch>
      </div>

    );
  }
}

export default App;
