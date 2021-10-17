import { useState, useEffect } from 'react';
import './programmeSchedule.styles.scss';
import { HeaderDate } from '../header/headerDate.component';
import {
  ChannelShows,
  getDatePosition,
} from '../channelShows/channelShows.component';
import { Timeline } from '../header/headerTimeline.component';
import { useAssets } from '../useAssets/useAssets.component';

export const ProgrammeSchedule = ({ pos, scroll }) => {
  const { error, loading } = useAssets('epg');
  const [position, setPosition] = useState(7200);
  const now = new Date();
  const currentShows = 7200 - getDatePosition(now);

  useEffect(() => {
    ((pos) => {
      setPosition(currentShows);
      scroll !== false
        ? setInterval(() => {
            const update = new Date();
            const updateShows = 7200 - getDatePosition(update);
            position <= -7200
              ? setPosition(7200)
              : currentShows !== updateShows
              ? setPosition(updateShows)
              : setPosition(currentShows);
          }, 1000)
        : setPosition(7200);
    })(pos);
  }, [pos, scroll, currentShows, position]);

  if (loading) {
    return (
      <div id="loader" className="ui segment">
        <i className="notched circle loading icon" /> Loading...
      </div>
    );
  }

  if (error.status) {
    return (
      <div id="error" className="ui icon message">
        <i className="notched circle loading icon" />
        <div className="content">
          <div className="header">{error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <HeaderDate />
      <div className="programme-content">
        <div className="alignment" style={{ left: `${position}px` }}>
          <Timeline position={position} />
          <ChannelShows />
        </div>
      </div>
    </div>
  );
};
