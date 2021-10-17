import { useAssets } from '../../useAssets/useAssets.component';
import { ShowDataHeader } from './showDataHeader.component';
import { ShowDataMeta } from './showDataMeta.component';
import './showData.styles.scss';

export const ShowData = ({ asset }) => {
  const { shows, error, loading } = useAssets('program/:id');

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
    <div id="show-data-container">
      <div className="content-wrap">
        <div className="show-data-header">
          <ShowDataHeader image={shows.images.icon} />
        </div>
        <div className="show-data-meta">
          <ShowDataMeta shows={shows} />
        </div>

        <div className="show-data-content">
          <div className="show-data-info">
            <p>{shows.description}</p>
            <p>
              Cast:
              {shows.meta.cast.map((cast, index, casts) => {
                return (
                  <span key={index}>{` ${cast.name}${
                    index === casts.length - 1 ? ' ' : ', '
                  }`}</span>
                );
              })}
            </p>
            <p>
              Creators:
              {shows.meta.creators.map((creator, index, creators) => {
                return (
                  <span key={index}>{` ${creator.name}${
                    index === creators.length - 1 ? ' ' : ','
                  }`}</span>
                );
              })}{' '}
            </p>
          </div>

          <div className="ui grid show-data-season-episodes">
            {shows.series.map((season) => {
              return (
                <span className="five wide column">
                  <div className="season-title">{season.title}</div>
                  {season.episodes.map((episodes) => (
                    <div className="episode-title">{episodes.title}</div>
                  ))}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
