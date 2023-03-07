import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  state = {
    addFavoritesSongs: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const favSongs = await getFavoriteSongs();
      this.setState({
        loading: false,
        addFavoritesSongs: [...favSongs],
      });
    });
  }

  handleChange = (music) => {
    this.setState({ loading: true }, async () => {
      await removeSong(music);
      const favSongs = await getFavoriteSongs();
      this.setState({
        loading: false,
        addFavoritesSongs: [...favSongs],
      });
    });
  };

  render() {
    const { addFavoritesSongs, loading } = this.state;
    return (
      <div>
        <div data-testid="page-favorites" />
        <Header />
        {
          loading ? <Loading /> : (
            addFavoritesSongs.map((music) => (
              <MusicCard
                key={ music.trackName }
                previewUrl={ music.previewUrl }
                trackName={ music.trackName }
                addFavoritesSongs={ addFavoritesSongs }
                valChecked={ () => this.handleChange(music) }
                checked
              />
            ))
          )
        }
      </div>

    );
  }
}

export default Favorites;
