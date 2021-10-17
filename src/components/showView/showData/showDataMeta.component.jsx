import { showTitle } from '../../channelShows/channelShows.component';
import './showDataMeta.styles.scss';

export const ShowDataMeta = (props) => {
  const { shows } = props;

  return (
    <div className="ui grid show-data-meta">
      <div className="two wide column" />
      <div className="four wide column">
        <img
          className="historyLogo"
          src={shows.channelImages.logo}
          alt="history logo"
        />
      </div>
      <div className="eight wide column meta">
        <div>
          <span className="channelTitle">{shows.channelTitle} </span>
          <span className="showsTime">{showTitle(shows.start, shows.end)}</span>
        </div>
        <div>
          <h1 className="showTitle">{shows.title}</h1>
        </div>
        <div className="showYear">
          <span>{shows.meta.year + ' '}</span>
          {shows.meta.genres.map((genre, index) => {
            return (
              <span key={index} className="genre">
                {genre + ' '}
              </span>
            );
          })}
        </div>
      </div>
      <div className="two wide column" />
    </div>
  );
};
