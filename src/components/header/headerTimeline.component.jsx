import './headerTimeline.styles.scss';

export const Timeline = (props) => {
  const { position } = props;

  return (
    <div className="timeline-style">
      <div className="marker" style={{ left: `${7200 - position}px` }} />
      {timeloop()}
    </div>
  );
};

function timeloop() {
  let hours = [];
  for (let hour = 0; hour < 24; hour++) {
    let time = ('0' + hour).slice(-2) + ':00';
    hours.push(
      <div key={hour} className="time-hour">
        {time}
      </div>
    );
  }

  return hours;
}
