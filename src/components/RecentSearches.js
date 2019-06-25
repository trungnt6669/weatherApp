import React from 'react';
import { displayTemp } from '../utils/functions';

const RecentSearches = props => {
  return (
    <div>
      <h2>Most Recent Searches</h2>
      {props.recentSearches.length >= 1 ? (
        <div className="recent-searches">
          {props.recentSearches.map((query, index) => {
            return (
              <div className="search-item" key={index}>
                <div className="city-name">{query.name}</div>
                <div className="temp">
                  Temperature: {displayTemp(props.unit, query.main.temp)} °
                  {props.unit}
                </div>
                <div className="humidity">Humidity: {query.main.humidity}%</div>
                <div className="pressure">
                  Humidity: {query.main.pressure} hpa
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="recent-searches">No Recent Searches</div>
      )}
    </div>
  );
};

export default RecentSearches;
