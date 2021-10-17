import { Button } from 'semantic-ui-react';
import './headerDate.styles.scss';

export const HeaderDate = () => {
  return (
    <div className="time-date">
      {[-2, -1, 0, 1, 2].map((days) => currentDay(days))}
    </div>
  );
};

function currentDay(days) {
  let today = new Date();

  today.setDate(today.getDate() + days);

  const getMonth = today.getMonth() + 1;
  const getToday = today.getDate();

  const month = getMonth > 9 ? getMonth : '0' + (today.getMonth() + 1);
  const dayOfMonth = getToday > 9 ? getToday : '0' + today.getDate();
  const dayofWeek = today.toString().split(' ')[0];

  return (
    <Button secondary key={days} id="header-date">
      <span className="week-day">{dayofWeek}</span>
      <br />
      <span className="month-day">{`${dayOfMonth}.${month}.`}</span>
    </Button>
  );
}
