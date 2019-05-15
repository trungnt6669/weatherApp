import React from 'react';
import { displayTemp } from '../utils/functions';
import RecentSearches from './RecentSearches';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitFormat: 'F'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.unitFormat === 'F') {
      this.setState({ unitFormat: 'C' });
    } else {
      this.setState({ unitFormat: 'F' });
    }
  }

  render() {
    return (
      <div>
        <div className="weather">
          {this.props.weatherData.main ? (
            <div>
              <div className="city-name">{this.props.weatherData.name}</div>
              <div className="temp">
                Temperature:{' '}
                {displayTemp(
                  this.state.unitFormat,
                  this.props.weatherData.main.temp
                )}{' '}
                °{this.state.unitFormat}
              </div>
              <div className="humidity">
                Humidity: {this.props.weatherData.main.humidity}%
              </div>
              <div className="pressure">
                Humidity: {this.props.weatherData.main.pressure} hpa
              </div>
            </div>
          ) : (
            <div>Invalid Input. Please Try Again</div>
          )}
          <button className="unit-toggle" onClick={this.handleClick}>
            {this.state.unitFormat === 'F' ? 'Celsius' : 'Fahrenheit'}
          </button>
        </div>
        <RecentSearches
          recentSearches={this.props.recentSearches}
          unit={this.state.unitFormat}
        />
      </div>
    );
  }
}

export default Info;
