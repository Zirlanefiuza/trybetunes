import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  state = {
    artistName: '',
    albumName: '',
    listAlbum: [],
    addFavoritesSongs: [],
    loading: false,
  };

  async componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums = async () => {
    const { match: { params } } = this.props;
    const musics = await getMusics(params.id);
    const favoritesMusic = await getFavoriteSongs();

    this.setState({
      listAlbum: musics.filter((music, i) => i !== 0),
      artistName: musics[0].artistName,
      albumName: musics[0].collectionName,
      addFavoritesSongs: favoritesMusic,
    });
  };

  valChecked = (value) => {
    const { addFavoritesSongs } = this.state;

    this.setState({
      loading: true,
    }, async () => {
      await addSong(value);
      if (addFavoritesSongs.some((music) => music.trackId === value.trackId)) {
        await removeSong(value);
      } else {
        await addSong(value);
      }
      const favorites = await getFavoriteSongs();

      this.setState({
        loading: false,
        addFavoritesSongs: favorites,
      });
    });
  };

  render() {
    const { artistName, albumName, listAlbum, addFavoritesSongs, loading } = this.state;

    return (
      <div>
        <div data-testid="page-album" />
        <Header />

        {
          loading ? <Loading /> : (

            <section>
              <h2 data-testid="album-name">{albumName}</h2>
              <h3 data-testid="artist-name">{artistName}</h3>
            </section>
          )
        }

        {
          listAlbum.map((music, i) => (
            <div key={ i }>
              <MusicCard
                trackId={ music.trackId }
                trackName={ music.trackName }
                song={ music }
                checked={ addFavoritesSongs.some((song) => (
                  song.trackId === music.trackId
                )) }
                valChecked={ () => { this.valChecked(music); } }
              />
            </div>
          ))
        }

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default Album;
