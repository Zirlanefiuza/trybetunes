import React from 'react';
import AlbumArtist from '../components/AlbumArtist';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searcAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    inputArtist: '',
    albums: [],
    loading: false,
    searchArtist: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  buttonClick = async () => {
    const { inputArtist } = this.state;

    this.setState({
      loading: true,
      searchArtist: inputArtist,
    }, async () => {
      const artistId = await searcAlbumsAPI(inputArtist);

      this.setState({
        albums: artistId,
        loading: false,
        inputArtist: '',
      });
    });
  };

  render() {
    const { inputArtist, albums, loading, searchArtist } = this.state;
    const disabledLength = 2;

    if (loading) return <Loading />;

    return (
      <div data-testid="page-search">
        Search
        <Header />

        <form>
          <label htmlFor="inputArtist">
            <input
              type="text"
              placeholder="Nome do Artista"
              name="inputArtist"
              value={ inputArtist }
              data-testid="search-artist-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            data-testid="search-artist-button"
            disabled={ inputArtist.length < disabledLength }
            onClick={ this.buttonClick }
          >
            Pesquisar
          </button>
        </form>

        {
          (albums.length) !== 0
            ? (
              <div>
                <span>
                  {' '}
                  { `Resultado de álbuns de: ${searchArtist}` }
                </span>

                { albums.map((album) => (
                  <AlbumArtist
                    key={ album.collectionId }
                    albumImg={ album.artworkUrl100 }
                    searchArtist={ album.collectionName }
                    artistName={ album.artistName }
                    collectionId={ album.collectionId }
                  />
                ))}
              </div>)
            : <h2>Nenhum álbum foi encontrado</h2>
        }
      </div>
    );
  }
}
//xablauu
export default Search;
