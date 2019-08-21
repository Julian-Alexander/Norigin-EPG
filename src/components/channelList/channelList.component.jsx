import React from 'react';
import useAssets from '../useAssets/useassets.component';
import Guide from '../guide/guide.component';
import './channelList.styles.scss';

const ChannelList = () => {
  const { assets } = useAssets('epg');

  return (
    <div id='channels-container'>
      {assets.map(asset => {
        return (
          <ul key={asset.id} className='channel-list'>
            {asset.schedules.map((schedule, index) => (
              <Guide
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
  'December'
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

function getDatePosition(date) {
  return date.getHours() * hourSize + date.getMinutes() * minuteSize;
}
function showTime(date) {
  return `${('0' + date.getHours()).slice(-2)}:${(
    '0' + date.getMinutes()
  ).slice(-2)}`;
}

function showTitle(start, end) {
  const startShow = new Date(start);
  const endShow = new Date(end);

  return `${startShow.getDate()} ${months[startShow.getMonth()]}: ${showTime(
    startShow
  )} - ${showTime(endShow)}`;
}

export default ChannelList;
export { getDatePosition, showTitle };
