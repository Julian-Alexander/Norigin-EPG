import React, { useState, useEffect } from 'react';
import './landing.styles.scss';
import HeaderDate from '../header/headerdate.component';
import ChannelList, {
  getDatePosition
} from '../channelList/channelList.component';
import Timeline from '../header/headerTimeline.component';
import useAssets from '../useAssets/useassets.component';
import { Button } from 'semantic-ui-react';

const LandingPage = ({ pos }) => {
  const { error, loading } = useAssets('epg');
  const [position, setPosition] = useState(7200);
  const [scroll, setScroll] = useState(false);
  const now = new Date();
  const currentShows = 7200 - getDatePosition(now);

  useEffect(() => {
    (pos => {
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
  }, [pos, scroll]);

  function renderNowButton(pos) {
    const handleClickNow = () => {
      setScroll(true);
    };

    if (scroll !== true) {
      return (
        <Button className='ui orange button' onClick={handleClickNow}>
          NOW
        </Button>
      );
    }

    return '';
  }

  if (loading) {
    return (
      <div id='loader' className='ui segment'>
        <i className='notched circle loading icon' /> Loading...
      </div>
    );
  }

  if (error.status) {
    return (
      <div id='error' className='ui icon message'>
        <i className='notched circle loading icon' />
        <div className='content'>
          <div className='header'>{error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <HeaderDate />
      <div className='landingpage'>
        <div className='alignment' style={{ left: `${position}px` }}>
          <Timeline position={position} />
          {renderNowButton(scroll)}
          <ChannelList />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
