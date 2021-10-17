import { useAssets } from '../useAssets/useAssets.component';
import { Show } from './show/show.component';
import './channelShows.styles.scss';

export const ChannelShows = () => {
  const { assets } = useAssets('epg');

  return (
    <div id="channel-shows-container">
      {assets.map((asset) => {
        return (
          <ul key={asset.id} className="channel-shows">
            {asset.schedules.map((schedule, index) => (
              <Show
                key={schedule.id + index}
                size={programSize(schedule)}
                schedule={schedule}
              />
            ))}
          </ul>
        );
      })}
    </div>
  );
};

const hourMinutes = 60;
const hourSize = 600;
const minuteSize = hourSize / hourMinutes;
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function programSize(schedule) {
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);

  let size =
    end.getHours() * hourMinutes +
    end.getMinutes() -
    (start.getHours() * hourMinutes + start.getMinutes());
  return Math.abs(size * minuteSize);
}

export function getDatePosition(date) {
  return date.getHours() * hourSize + date.getMinutes() * minuteSize;
}

function showTime(date) {
  return `${('0' + date.getHours()).slice(-2)}:${(
    '0' + date.getMinutes()
  ).slice(-2)}`;
}

export function showTitle(start, end) {
  const startShow = new Date(start);
  const endShow = new Date(end);

  return `${startShow.getDate()} ${months[startShow.getMonth()]}: ${showTime(
    startShow
  )} - ${showTime(endShow)}`;
}
