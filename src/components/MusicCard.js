import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { trackName, previewUrl, trackId, checked, valChecked, music } = this.props;
    return (
      <div>
        <h3>{trackName}</h3>

        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>

        <form>
          <label htmlFor="Favorita">
            <input
              data-testid={ `checkbox-music-${trackId}` }
              type="checkbox"
              id="input-checkbox"
              value={ music }
              onChange={ valChecked }
              checked={ checked }
            />
          </label>
        </form>
      </div>

    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.elementType.isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  valChecked: PropTypes.func.isRequired,
  music: PropTypes.objectOf(PropTypes.string).isRequired,

};

export default MusicCard;
