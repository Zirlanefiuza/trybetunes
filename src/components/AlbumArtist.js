import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AlbumArtist extends React.Component {
  render() {
    const { albumImg, artistName, searchArtist, collectionId } = this.props;

    return (
      <div>
        <img src={ albumImg } alt={ searchArtist } />
        <h3>{ searchArtist }</h3>
        <h4>{ artistName }</h4>

        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          {artistName}
        </Link>
      </div>
    );
  }
}

AlbumArtist.propTypes = {
  albumImg: PropTypes.string,
  searchArtist: PropTypes.string,
  collectionId: PropTypes.string,
  artistName: PropTypes.string,
}.isRequired;

export default AlbumArtist;
