import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    inputArtist: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputArtist } = this.state;
    const onDisable = 2;

    return (
      <div>
        <div data-testid="page-search" />
        <Header />

        <form>

          <label htmlFor="inputArtist">
            Artist Search
            <input
              data-testid="search-artist-input"
              id="inputArtist"
              type="text"
              name="inputArtist"
              value={ inputArtist }
              onChange={ this.handleChange }
            />
          </label>

          <button
            data-testid="search-artist-button"
            disabled={ inputArtist.length < onDisable }
          >
            Pesquisar
          </button>

        </form>

      </div>

    );
  }
}

export default Search;
