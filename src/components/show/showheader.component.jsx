import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import YouTube from 'react-youtube';
import './showheader.styles.scss';

const ShowHeader = props => {
  const { image } = props;
  const [playing, setPlaying] = useState(false);

  const handlePlayTrailer = () => {
    setPlaying(true);
  };

  if (playing) {
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
        autohide: 1
      }
    };

    return (
      <header className='ProgramHeader'>
        <YouTube videoId='8dGCvJkzQSE' opts={opts} onReady={_onReady} />
      </header>
    );
  }

  function _onReady(event) {
    event.target.playVideo();
  }

  return (
    <div className='showHeader' style={{ backgroundImage: `url("${image}"` }}>
      <div className='fader' />
      <div className='play-button-container' onClick={handlePlayTrailer}>
        <Icon className='play circle outline inverted' />
      </div>
      <div className='fader bottom' />
    </div>
  );
};

export default ShowHeader;
