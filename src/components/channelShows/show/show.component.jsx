import { Link } from 'react-router-dom';
import './show.styles.scss';

export const Show = (props) => {
  const { size, schedule } = props;

  const showNow = currentShow(schedule) ? 'shownow' : '';

  return (
    <div id="show-container" style={{ width: size }} className={showNow}>
      <Link className="link" to={`/program/${schedule.id}`}>
        <h1 className="show-title">{schedule.title}</h1>
        <span className="show-time">{translateDate(schedule)}</span>
      </Link>
    </div>
  );
};

function translateDate(schedule) {
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  return (
    ('0' + start.getHours()).slice(-2) +
    ':' +
    ('0' + start.getMinutes()).slice(-2) +
    ' - ' +
    ('0' + end.getHours()).slice(-2) +
    ':' +
    ('0' + end.getMinutes()).slice(-2)
  );
}

function currentShow(schedule) {
  const now = new Date();
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);
  return (
    now.getHours() * 60 + now.getMinutes() >
      start.getHours() * 60 + start.getMinutes() &&
    now.getHours() * 60 + now.getMinutes() <
      end.getHours() * 60 + end.getMinutes()
  );
}
