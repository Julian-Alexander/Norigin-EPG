import React from 'react';
import { Button } from 'semantic-ui-react';
import './headerdate.styles.scss';

const HeaderDate = () => {
  return (
    <div className='time-date'>
      {[-2, -1, 0, 1, 2].map(days => currentDay(days))}
    </div>
  );
};

function currentDay(days) {
  let today = new Date();
  today.setDate(today.getDate() + days);
  const month = '0' + (today.getMonth() + 1);
  const dayOfMonth = ('0' + today.getDate()).slice(-2);
  const dayofWeek = today.toString().split(' ')[0];

  return (
    <Button secondary key={days} id='header-date'>
      <span className='week-day'>{dayofWeek}</span>
      <br />
      <span className='month-day'>{`${dayOfMonth}.${month}.`}</span>
    </Button>
  );
}

export default HeaderDate;
