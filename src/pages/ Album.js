import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    artistName: '',
    albumName: '',
    listAlbum: [],
  };

  async componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums = async () => {
    const { match: { params } } = this.props;
    const musics = await getMusics(params.id);

    this.setState({
      listAlbum: musics.filter((music, i) => i !== 0),
      artistName: musics[0].artistName,
      albumName: musics[0].collectionName,
    });
  };

  render() {
    const { artistName, albumName, listAlbum } = this.state;
    return (
      <div>
        <div data-testid="page-album" />
        <Header />

        <h2 data-testid="album-name">{albumName}</h2>
        <h3 data-testid="artist-name">{artistName}</h3>

        {
          listAlbum.map((music, i) => (
            <div key={ i }>
              <MusicCard
                name={ music.artistName }
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
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
