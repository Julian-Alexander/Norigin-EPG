import React from 'react';
import useAssets from '../useAssets/useassets.component';
import ShowHeader from './showheader.component';
import ShowMeta from './showmeta.component';

import './show.styles.scss';

const Show = ({ asset }) => {
  const { shows, error, loading } = useAssets('program/:id');

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
    <div id='shows-container'>
      <div className='content-wrap'>
        <div className='show-header'>
          <ShowHeader image={shows.images.icon} />
        </div>
        <div className='show-meta'>
          <ShowMeta shows={shows} />
        </div>

        <div className='show-content'>
          <p>{shows.description}</p>
          <p>
            <span>Cast: </span>
            {shows.meta.cast.map((cast, index, casts) => {
              return (
                <span key={index}>{`${cast.name}${
                  index === casts.length - 1 ? ' ' : ', '
                }`}</span>
              );
            })}
          </p>
          <p>
            <span>Creators:</span>
            {shows.meta.creators.map((creator, index, creators) => {
              return (
                <span key={index}>{`${creator.name}${
                  index === creators.length - 1 ? ' ' : ', '
                }`}</span>
              );
            })}{' '}
            <div className='season-episodes'>
              <div className='ui grid show-seasons'>
                {shows.series.map(season => {
                  return (
                    <span className='four wide column'>{season.title}</span>
                  );
                })}
              </div>
              <div className='ui grid show-episodes'>
                {shows.series.map(season => {
                  return (
                    <ul className='four wide column'>
                      {season.episodes.map(episodes => (
                        <div className='episodes'>{episodes.title}</div>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Show;
