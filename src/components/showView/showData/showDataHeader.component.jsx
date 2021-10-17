import { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import YouTube from 'react-youtube';
import './showDataHeader.styles.scss';

export const ShowDataHeader = (props) => {
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
        autohide: 1,
      },
    };

    return (
      <header className="ProgramHeader">
        <YouTube videoId="OmZacoolJ7Y" opts={opts} onReady={_onReady} />
      </header>
    );
  }

  function _onReady(event) {
    event.target.playVideo();
  }

  return (
      <div
        className="show-data-header"
        style={{ backgroundImage: `url("${image}"` }}
      >
      <Icon
        className="play circle outline inverted play-button"
        onClick={handlePlayTrailer}
      />
        <div className="fader" />
        <div className="fader bottom" />
      </div>
  );
};
